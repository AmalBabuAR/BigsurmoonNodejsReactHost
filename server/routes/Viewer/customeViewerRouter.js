import express from "express";
import { euroGuardController } from "../../controllers/ViewerControllers/EuroGuardController.js";

const router = express.Router();

router.get("/viewer/EuroGuard", euroGuardController);

export default router;
