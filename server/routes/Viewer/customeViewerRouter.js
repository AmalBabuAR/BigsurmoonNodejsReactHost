import express from "express";
import { euroGuardController } from "../../controllers/ViewerControllers/EuroGuardController.js";
import { lethalBlackController } from "../../controllers/ViewerControllers/LethalBlackController.js";

const router = express.Router();

router.get("/viewer/EuroGuard", euroGuardController);

router.get("/viewer/lethalBlack", lethalBlackController);

export default router;
