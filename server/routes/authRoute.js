import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  deleteProjectFromID,
  getProjectsList,
  getProjectsSize,
  getUserName,
  postProjectName,
} from "../controllers/authDashboard.js";
import { referralEmailSubscribe } from "../controllers/referralControl.js";
import { createProjectName, deleteFullProjectController, getProjectDetails } from "../controllers/modelEditorController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN ||POST
router.post("/login", loginController);

//Forgot Password || POST

router.post("/forgotPassword", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

// referral email subscribe
router.post("/ref", referralEmailSubscribe);

//protected-route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true, id: req.user._id });
});

//Req with the Token checking || middleware
router.use(requireSignIn);

router.post("/user/postProject", postProjectName);

router.get("/user/getProjects", getProjectsList);

router.get("/user/getProjectSize", getProjectsSize);

router.delete("/user/deleteProject/:id", deleteProjectFromID);

router.get('/user/getUserName', getUserName)

// v2 platform routes

router.get("/user/v2GetProjects", getProjectDetails);

router.post("/user/V2createProject", createProjectName);

router.delete("/user/V2DeleteProject/:id", deleteFullProjectController);

export default router;
