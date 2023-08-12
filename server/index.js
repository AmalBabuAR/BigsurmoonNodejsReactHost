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

//rest object
const app = express();

//configure env
dotenv.config();

//database config
connectDB();

// Serve static files from the build directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/build")));

//middelwares
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(
  cors({
    origin: ["https://bigsurmoon.live", "https://bigsurmoon.com", "https://bigsurmoon.com/save_variation"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

//const allowedOrigins = ["https://bigsurmoon.live","https://bigsurmoon.com","https://bigsurmoon.com/assets","https://bigsurmoon.com/save_variation"]; // Add other origins if needed
// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// }));

//routes
app.use("/api", authRoutes);
app.use("/api/user/stripe", stripeRouter);
app.use("/api/upload", routerUpload);
app.use("/stripe", stripeWebhookRouter);

//threejs Router
app.use("/three", threeRouter);
app.use("/assets", assetsRouter);
app.use("/delete", deleteRouter);
app.use("/update_sceneobject", updateSceneObjectRouter);
app.use("/generate_scene", generateSceneRouter);
app.use("/save_variation", saveVariationRouter);
app.use("/getConfigNames", getConfigNamesRouter);
app.use("/deleteConfig", deleteConfigNamesRouter);
app.use("/generate_scene_view", generateSceneViewRouter);

// Handle CORS preflight requests (OPTIONS) for all routes
app.options("*", cors());

// Serve the index.html file for all other requests
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "frontend", "build", "index.html")
  );
});

//PORT
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`
      .blue
  );
});
