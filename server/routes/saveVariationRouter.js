import express from "express";
import pool from "../database/postgresqlConnection.js";
const saveVariationRouter = express.Router();

saveVariationRouter.post("/", async (req, res) => {
  try {
    // Extract the data from the request body
    const { variant, configname, projectId, variantContainer, object } =
      req.body;

    // Prepare an array of object types you want to store
    const objectTypes = ["materials", "textures", "images", "object"];

    let contentExists = false;

    // Loop through each object type
    for (const objectType of objectTypes) {
      if (object.hasOwnProperty(objectType)) {
        // Construct the unique ID
        const cuid = `${projectId}-${variant}-${configname}-${objectType}`;

        const result = await pool.query(
          "SELECT cuid FROM cnf.configdata WHERE cuid = $1",
          [cuid]
        );
        if (result.rows.length > 0) {
          contentExists = true;
        } else {
          await pool.query(
            "INSERT INTO cnf.configdata (cuid, variant, configname, objecttype, projectid, data, variantcontainer, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())",
            [
              cuid,
              variant,
              configname,
              objectType,
              projectId,
              JSON.stringify(object[objectType]),
              variantContainer,
            ]
          );
        }

        // Store the data in the database
      }
    }
    // Respond
    if (contentExists) {
      // Content already exists, respond with an appropriate message
      res.json({
        success: false,
        message: "Configuration already exists!",
        configname,
        variant,
        variantContainer,
      });
    } else {
      // Content is saved successfully
      res.json({
        success: true,
        message: "Configuration saved successfully!",
        configname,
        variant,
        variantContainer,
      });
    }
  } catch (err) {
    console.error(`Error in save Variation Router: ${err.message}`);
    res.status(500).send("Server error");
  }
});

export default saveVariationRouter;
