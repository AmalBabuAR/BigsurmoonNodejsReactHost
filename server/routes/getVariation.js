import express from "express";
import pool from "../database/postgresqlConnection.js";
const getConfigNamesRouter = express.Router();

getConfigNamesRouter.get("/:id", async (req, res) => {
  const projectId = req.params.id;
  try {
    // Fetch all unique confignames from the configdata table
    const queryResult = await pool.query(
      "SELECT DISTINCT configname, variant, variantcontainer, created_at FROM cnf.configdata WHERE projectid = $1 ORDER BY created_at ASC",
      [projectId]
    );

    if (queryResult.rows.length > 0) {
      // Extract the confignames from the query result
      const response = queryResult.rows.map((row) => {
        const output = {
          configname: row.configname,
          variant: row.variant,
          variantContainer: row.variantcontainer
        };
        return output;
      });

      res.json({ success: true, data: response });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error(`Error in get ConfigNames Router : ${err.message}`);
    res.status(500).send("Server error");
  }
});

export default getConfigNamesRouter;
