import express from "express";
import pool from "../database/postgresqlConnection.js";
const updateVariationRouter = express.Router();

updateVariationRouter.post("/", async (req, res) => {
  // console.log(req.body);
  try {
    const { searchQuery, updateQuery } = req.body;
    const { variant, configname, projectId } = searchQuery;
    const { object } = updateQuery;
    // console.log(variant, configname, projectId, object);

    const deleteConfig = await pool.query(
      "DELETE FROM cnf.configdata WHERE variant = $1 AND projectid = $2  AND configname = $3",
      [variant, projectId, configname]
    );

    if (deleteConfig.rowCount !== 0) {
      const objectTypes = ["materials", "textures", "images", "object"];
      for (const objectType of objectTypes) {
        if (object.hasOwnProperty(objectType)) {
          const cuid = `${projectId}-${variant}-${configname}-${objectType}`;
          // Update the existing record
          await pool.query(
            "INSERT INTO cnf.configdata (cuid, variant, configname, objecttype, projectid, data) VALUES ($1, $2, $3, $4, $5, $6)",
            [
              cuid,
              variant,
              configname,
              objectType,
              projectId,
              JSON.stringify(object[objectType]),
            ]
          );
        }
      }
      res.json({
        success: true,
        message: "Configuration updated successfully!",
      });
    } else {
      res.json({
        success: false,
        message: "No Configuration!",
      });
    }
  } catch (error) {
    console.log(`Error in update Variation Router : ${error.message}`);
  }
});

export default updateVariationRouter;
