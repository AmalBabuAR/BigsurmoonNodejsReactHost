import express from "express";
import pool from "../database/postgresqlConnection.js";
const deleteRouter = express.Router();

deleteRouter.delete("/", async (req, res) => {
  // console.log('req cm in deletedAsset');
  try {
    const { uuid } = req.body;
    // console.log(`Deleting asset with uuid: ${uuid}`);
    const deletedAsset = await pool.query(
      "DELETE FROM cnf.assets WHERE uuid = $1 AND cnf = FALSE RETURNING *",
      [uuid]
    );

    if (deletedAsset.rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No asset found with that uuid or cnf is not false" });
    }

    res.json(deletedAsset.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default deleteRouter;
