import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import colors from "colors";
import Stripe from "stripe";
import connectDB from "./database/connection.js";
import authRoutes from "./routes/authRoute.js";
import threeRouter from "./routes/threejsRoute.js";
import routerUpload from "./routes/uploadRoute.js";
import stripeRouter from "./routes/stripeRouter.js";
import { fileURLToPath } from "url";
import path, { dirname, resolve } from "path";
import assetsRouter from "./routes/assetsThreeRouter.js";
import deleteRouter from "./routes/deleteThreeRouter.js";
import updateSceneObjectRouter from "./routes/updateThreeSceneObject.js";
import generateSceneRouter from "./routes/generateThreeScene.js";
import saveVariationRouter from "./routes/saveVariationRouter.js";
import getConfigNamesRouter from "./routes/getVariation.js";
import deleteConfigNamesRouter from "./routes/deleteVariation.js";
import generateSceneViewRouter from "./routes/generateSceneViewRouter.js";

//rest object
const app = express();

//configure env
dotenv.config();

//database config
connectDB();

// Serve static files from the build directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = resolve(__dirname, "../frontend/build");
app.use(express.static(buildPath));

//middelwares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//routes
app.use("/api", authRoutes);
app.use("/api/user/stripe", stripeRouter);
app.use("/api/upload", routerUpload);

//threejs Router
app.use("/three", threeRouter);
app.use("/assets", assetsRouter);
app.use("/delete", deleteRouter);
app.use("/update_sceneobject", updateSceneObjectRouter);
app.use("/generate_scene", generateSceneRouter);
app.use("/save_variation", saveVariationRouter);
app.use('/getConfigNames', getConfigNamesRouter )
app.use('/deleteConfig', deleteConfigNamesRouter )
app.use('/generate_scene_view', generateSceneViewRouter)

// Serve the index.html file for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//PORT
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`
      .blue
  );
});
