import express from "express";
import pool from "../database/postgresqlConnection.js";
const saveVariationRouter = express.Router();

saveVariationRouter.post("/", async (req, res) => {
  console.log("req in save varent");
  try {
    // Extract the data from the request body
    const { configname, projectId, object } = req.body;

    // Prepare an array of object types you want to store
    const objectTypes = ["materials", "textures", "images", "object"];

    // Loop through each object type
    for (const objectType of objectTypes) {
      if (object.hasOwnProperty(objectType)) {
        // Construct the unique ID
        const cuid = `${projectId}-${configname}-${objectType}`;

        // Store the data in the database
        await pool.query(
          "INSERT INTO cnf.configdata (cuid, configname, objecttype, projectid, data) VALUES ($1, $2, $3, $4, $5)",
          [
            cuid,
            configname,
            objectType,
            projectId,
            JSON.stringify(object[objectType]),
          ]
        );
      }
    }

    // Respond with a success message
    res.json({ success: true, message: "Configuration saved successfully!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default saveVariationRouter;
