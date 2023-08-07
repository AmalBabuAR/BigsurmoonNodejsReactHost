import express from "express";
import pool from "../database/postgresqlConnection.js";
import ProjectDetails from "../models/projectDetailsModel.js";
const generateSceneRouter = express.Router();

generateSceneRouter.get("/:projectId", async (req, res) => {
  console.log("req cm in generate_scene");
  try {
    const projectId = req.params.projectId;
    console.log(projectId);
    const output = {
      metadata: {
        version: 4.3,
        type: "Object",
        generator: "ObjectExporter",
      },
      geometries: [],
      materials: [],
      animations: [],
      textures: [],
      images: [],
      skeletons: [],
      object: {},
    };

    // Query the assets table
    const assetsRes = await pool.query(
      "SELECT * FROM cnf.assets WHERE projectid = $1",
      [projectId]
    );
    if (assetsRes.rowCount > 0) {
      assetsRes.rows.forEach((row) => {
        if (row.type === "geometry") {
          output.geometries.push(row.data);
        } else if (row.type === "material") {
          output.materials.push(row.data);
        } else if (row.type === "animation") {
          output.animations.push(row.data);
        } else if (row.type === "texture") {
          output.textures.push(row.data);
        } else if (row.type === "image") {
          output.images.push(row.data);
        } else if (row.type === "skeleton") {
          output.skeletons.push(row.data);
        }
      });

      // Query the threeobject table
      const objectRes = await pool.query(
        "SELECT object FROM cnf.threeobject WHERE projectid = $1",
        [projectId]
      );

      if (objectRes.rows.length > 0) {
        output.object = objectRes.rows[0].object;
      } else {
        res
          .status(404)
          .json({ error: `No object found for that project id:${projectId}` });
        return;
      }
      console.log(output);
      res.json(output);
    } else {
      // If the project doesn't exist in the database, return existing as false
      res.json({ existing: false });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

generateSceneRouter.get("/checking/:projectId", async (req, res) => {
  const projectId = req.params.projectId;
  console.log("user in checking", projectId);
  try {
    const project = await ProjectDetails.findOne({ _id: projectId });
    console.log("project", project);
    if (project) {
      // If the project exists with the provided projectId, return existing as true
      res.json({ existing: true });
    } else {
      // If the project doesn't exist with the provided projectId, return existing as false
      res.json({ existing: false });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while checking the project." });
  }
});

export default generateSceneRouter;
