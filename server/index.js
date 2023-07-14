import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import colors from "colors";
import { resolve } from "path";
import Stripe from "stripe";
import connectDB from "./database/connection.js";
import authRoutes from "./routes/authRoute.js";
import threeRouter from "./routes/threejsRoute.js";
import routerUpload from "./routes/uploadRoute.js";
import stripeRouter from "./routes/stripeRouter.js";

//rest object
const app = express();

//configure env
dotenv.config();

//database config
connectDB();

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
app.use("/stripe", stripeRouter);
app.use("/api/upload", routerUpload);
app.use("/three", threeRouter);

//PORT
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on http://localhost:${PORT}`
      .blue
  );
});
