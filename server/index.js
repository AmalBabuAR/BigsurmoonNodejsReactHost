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
import path, { dirname } from "path";
import assetsRouter from "./routes/assetsThreeRouter.js";
import deleteRouter from "./routes/deleteThreeRouter.js";
import updateSceneObjectRouter from "./routes/updateThreeSceneObject.js";
import generateSceneRouter from "./routes/generateThreeScene.js";
import saveVariationRouter from "./routes/saveVariationRouter.js";
import getConfigNamesRouter from "./routes/getVariation.js";
import deleteConfigNamesRouter from "./routes/deleteVariation.js";
import generateSceneViewRouter from "./routes/generateSceneViewRouter.js";
import stripeWebhookRouter from "./routes/stripeWebhook.js";
import getVareintRouter from "./routes/getVareintRouter.js";
import updateVariationRouter from "./routes/updateVariationRouter.js";
import mvEditorRouter from "./routes/mvEditorRouter.js";
import customeViewerRouter from "./routes/Viewer/customeViewerRouter.js";

//rest object
const app = express();

//configure env
dotenv.config();

//database config
connectDB();

// Serve static files from the build directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use(express.static(path.join(__dirname, "public")));

//middelwares
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.options("*", cors());

//routes
app.use("/api", authRoutes);
app.use("/api/user/stripe", stripeRouter);
app.use("/api/upload", routerUpload);
app.use("/stripe", stripeWebhookRouter);

// v2 editor route
app.use("/editor/api", mvEditorRouter);

//threejs Router
app.use("/three", threeRouter);
app.use("/assets", assetsRouter);
app.use("/delete", deleteRouter);
app.use("/update_sceneobject", updateSceneObjectRouter);
app.use("/generate_scene", generateSceneRouter);
app.use("/save_variation", saveVariationRouter);
app.use("/update_variation", updateVariationRouter);
app.use("/getConfigNames", getConfigNamesRouter);
app.use("/deleteConfig", deleteConfigNamesRouter);
app.use("/getVareint", getVareintRouter);
app.use("/generate_scene_view", generateSceneViewRouter);

// Handle CORS preflight requests (OPTIONS) for all routes
//app.options("*", cors());

// Viewer Customisation
app.use("/custome", customeViewerRouter);

// Serve the index.html file editor
app.get("/editor", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/editor/ModelViewer/", (req, res) => {
  res.sendFile(__dirname + "/views/viewer.html");
});

app.get("/configurator/", (req, res) => {
  res.sendFile(__dirname + "/views/configurator.html");
});

app.get("/editor/Viewer/", (req, res) => {
  res.sendFile(__dirname + "/views/homeViewer/v2HomeViewer.html");
});

// new editor testing ground ----------------------------------------------------------------------

app.get("/editor/testing/", (req, res) => {
  res.sendFile(__dirname + "/views/testing/editorTesting.html");
});
app.get("/editor/dashbord", (req, res) => {
  res.sendFile(__dirname + "/views/testing/dashboard.html");
});
app.get("/editor/testViewer", (req, res) => {
  res.sendFile(__dirname + "/views/testing/testViewer.html");
});

// ------------------------------------------------------------------------------------------------

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "frontend", "dist", "index.html"));
});

//PORT
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`
      .blue
  );
});
