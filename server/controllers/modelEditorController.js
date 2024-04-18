import multer from "multer"; // Import multer
// import postS3BucketUploads from "../helpers/S3BucketFileUploadFunctionality.js";
import {
  deleteS3BucketUploads,
  getFileUrl,
  postS3BucketUploads,
} from "../helpers/S3BucketFileUploadFunctionality.js";
import TestingProject from "../models/testingProjectModel.js";

// Define multer middleware to handle multipart/form-data
const upload = multer();

export const multerMiddleware = upload.fields([
  { name: "Model" },
  { name: "poster" },
]);

export const createProjectName = async (req, res) => {
  console.log("req coming");
  console.log(req.body);
  const userId = "9400908970";
  const { projectName } = req.body;
  try {
    if (projectName) {
      const data = {
        userId: userId,
        name: projectName,
      };

      const saveData = new TestingProject(data);
      await saveData.save();

      console.log("++", saveData);

      res.status(200).json({ id: saveData._id, name: saveData.name });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProjectDetails = async (req, res) => {
  try {
    console.log("req in get project details");
    const userId = "9400908970";
    const responseData = await TestingProject.find({ userId });
    res.status(200).json(responseData);
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};

export const modelUploadController = async (req, res) => {
  try {
    // console.log("coming", req.body);
    const { configData, bestPractices, EnvironmentData, projectID } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files were uploaded" });
    }

    const projectIDConv = JSON.parse(projectID);
    // console.log("convert id", projectIDConv);

    const files = req.files.file;
    let glbRes, posterRes;

    if (files[0]?.mimetype === "application/octet-stream") {
      const glb = files[0];
      glbRes = await postS3BucketUploads(glb, projectIDConv);
    }
    if (files[1]?.mimetype === "image/webp") {
      const poster = files[1];
      posterRes = await postS3BucketUploads(poster, projectIDConv);
      // console.log("inside box", posterRes);
    }

    // console.log("out of box", glbRes, posterRes);

    const hotspotData = [];
    let index = 0;
    while (req.body[`hotspot[${index}][name]`]) {
      const hotspotObj = {};
      for (const key in req.body) {
        if (key.startsWith(`hotspot[${index}]`)) {
          const field = key.split("]")[1].split("[")[1];
          hotspotObj[field] = req.body[key];
        }
      }
      hotspotData.push(hotspotObj);
      index++;
    }

    const configs = JSON.parse(configData);
    const bestPracticesData = JSON.parse(bestPractices);

    // console.log("Parsed hotspot data:", hotspotData);

    let environmentName;
    if (EnvironmentData !== "undefined") {
      console.log("Environment data is defined");
      environmentName = JSON.parse(EnvironmentData);
    }

    const saveData = await TestingProject.findByIdAndUpdate(
      projectIDConv,
      {
        $set: {
          model: glbRes,
          poster: posterRes,
          hotspot: hotspotData,
          config: configs,
          bestPractices: bestPracticesData,
          environment: environmentName,
        },
      },
      { new: true, upsert: true }
    );

    if (saveData !== null) {
      return res.status(200).json({ status: true });
    }

    console.log("saveDatra", saveData);

    res.send("Model Uploaded");
  } catch (error) {
    console.log("error", error);
    res.send({ error });
  }
};

export const getModelController = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    // console.log("projectId", projectId);
    // const id = "65f809e5fd3d525d08834ecd";

    const project = await TestingProject.findById(projectId);

    // const getUrl = await getFileUrl(project?.model?.key);
    // console.log("getUrl", getUrl);
    // console.log(project);

    // console.log("project", project?.model?.url);
    res.json(project);
  } catch (error) {
    console.log("error", error);
  }
};

export const getPrevProjectController = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    // console.log("projectId", projectId);
    const project = await TestingProject.findById(projectId);
    // console.log("res", project);
    if (project !== null) {
      res.json({
        status: true,
        name: project?.name,
        url: project?.model?.url,
        modelName: project?.model?.key,
        config: project?.config,
        bestPractices: project?.bestPractices,
        hotspot: project?.hotspot,
      });
    } else {
      res.json({
        status: false,
      });
    }
  } catch (error) {
    console.log("erore", error);
    res.json({
      status: false,
    });
  }
};

export const updateProjectNameController = async (req, res) => {
  try {
    console.log("req", req.body);
    const { id, name } = req.body;

    const update = await TestingProject.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
        },
      }
    );
    console.log("update", update);
    if (update?.acknowledged) {
      res.json({
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProjectController = async (req, res) => {
  try {
    // console.log("req", req.body);
    const { idFromUrl } = req.body;
    // const id = "6607bd4ebfbd43d74124aa2b";
    // console.log("id", id);
    const doc = await TestingProject.findOne({ _id: idFromUrl });
    console.log("doc", doc);
    if (doc !== null) {
      const file = doc?.model?.key;
      const poster = doc?.poster?.key;

      if (file) {
        await deleteS3BucketUploads(file);
      }

      if (poster) {
        await deleteS3BucketUploads(poster);
      }

      const deleteModel = await TestingProject.updateOne(
        { _id: idFromUrl },
        {
          $unset: {
            hotspot: "",
            bestPractices: "",
            config: "",
            model: "",
            poster: "",
          },
        }
      );
      res.status(200).json({ status: true });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ status: false });
  }
};

export const deleteFullProjectController = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  try {
    const doc = await TestingProject.findOne({ _id: id });
    if (doc !== null) {
      const file = doc?.model?.key;
      const poster = doc?.poster?.key;
      if (file) {
        await deleteS3BucketUploads(file);
      }

      if (poster) {
        await deleteS3BucketUploads(poster);
      }
      const deleteProject = await TestingProject.deleteOne({ _id: id });
      console.log("delete project", deleteProject);
      res.status(200).json({ status: true });
    }
  } catch (error) {
    console.log(error);
  }
};