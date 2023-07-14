import express from "express";
import {  threejsDataController, threejsDataSaveController } from "../controllers/threejsController.js";

const threejsRouter = express.Router();


threejsRouter.post('/fileData',threejsDataController )

threejsRouter.post('/save',threejsDataSaveController )

export default threejsRouter;