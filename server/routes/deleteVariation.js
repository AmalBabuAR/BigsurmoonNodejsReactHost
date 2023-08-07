import express from "express";
import pool from "../database/postgresqlConnection.js";
const deleteConfigNamesRouter = express.Router();

// New route for deleting a configuration by configname
deleteConfigNamesRouter.delete("/:configname", async (req, res) => {
  const configName = req.params.configname;
  try {
    // Perform the delete operation in the database based on configname
    await pool.query(
      "DELETE FROM cnf.configdata WHERE configname = $1",
      [configName]
    );

    // Respond with a success message
    res.json({ success: true, message: "Configuration deleted successfully." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Error deleting configuration." });
  }
});

export default deleteConfigNamesRouter;