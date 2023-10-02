import express from "express";
import pool from "../database/postgresqlConnection.js";
const deleteConfigNamesRouter = express.Router();

// New route for deleting a configuration by configname
deleteConfigNamesRouter.delete("/texture", async (req, res) => {
  const { variantName, configName, idFromUrl } = req.body;
  // console.log("delete", req.body);
  try {
    // Perform the delete operation in the database based on configname
    await pool.query(
      "DELETE FROM cnf.configdata WHERE variant = $1 AND projectid = $2 AND configname = $3",
      [variantName, idFromUrl, configName]
    );

    // Respond with a success message
    res.json({ success: true, message: "Configuration deleted successfully." });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ success: false, message: "Error deleting configuration." });
  }
});

deleteConfigNamesRouter.delete("/model", async (req, res) => {
  const { modelName, container, idFromUrl } = req.body;
  // console.log("delete", req.body);
  try {
    // Perform the delete operation in the database based on idFromUrl and either container or modelName
    await pool.query(
      "DELETE FROM cnf.configdata WHERE projectid = $1 AND ((variantcontainer = $2) OR (configname = $3))",
      [idFromUrl, container, modelName]
    );

    // Respond with a success message
    res.json({ success: true, message: "Configuration deleted successfully." });
  } catch (err) {
    console.error(`Error in delete ConfigNames Router : ${err.message}`.bgRed);
    res
      .status(500)
      .json({ success: false, message: "Error deleting configuration." });
  }
});


export default deleteConfigNamesRouter;
