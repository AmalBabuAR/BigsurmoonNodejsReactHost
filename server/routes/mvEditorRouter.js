import express from "express";
import {
  createProjectName,
  deleteProjectController,
  getModelController,
  getPrevProjectController,
  getProjectDetails,
  modelUploadController,
  updateProjectNameController,
} from "../controllers/modelEditorController.js";

//router object
const router = express.Router();

router.post("/createProject", createProjectName);

router.get("/getProjects", getProjectDetails);

router.post("/upload", modelUploadController);

router.get("/getModel/:projectId", getModelController);

router.get("/getPrevProject/:projectId", getPrevProjectController);

router.patch("/updateName", updateProjectNameController);

router.delete("/deleteProject", deleteProjectController);

export default router;
