import express from "express";
import pool from "../database/postgresqlConnection.js";
const getConfigNamesRouter = express.Router();

getConfigNamesRouter.get("/:id", async (req, res) => {
  const projectId = req.params.id;
  console.log("projectId in get getVariation", projectId);
  try {
    // Fetch all unique confignames from the configdata table
    const queryResult = await pool.query(
      "SELECT DISTINCT configname,variant FROM cnf.configdata WHERE projectid = $1",
      [projectId]
    );

    // Extract the confignames from the query result
    const response = queryResult.rows.map((row) => {
      const output = {
        configname: row.configname,
        variant: row.variant,
      };
      return output

    });

    // Respond with the list of confignames
    res.json({ response });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default getConfigNamesRouter;
