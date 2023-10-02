import express from "express";
import pool from "../database/postgresqlConnection.js";
const updateSceneObjectRouter = express.Router();

updateSceneObjectRouter.post("/", async (req, res) => {
    // console.log('req cm in update_sceneobject');
  try {
    const { uuid, projectid, type, object, update_type } = req.body;
    // console.log(req.body);
    if (update_type === "New") {
      // console.log(`Inserting new scene object with uuid: ${uuid}`);
      const insertedObject = await pool.query(
        "INSERT INTO cnf.threeobject (uuid, projectid, type, object) VALUES ($1, $2, $3, $4) RETURNING *",
        [uuid, projectid, type, object]
      );

      res.json(insertedObject.rows[0]);
    } else if (update_type === "Old") {
      // console.log(`Updating scene object with uuid: ${uuid}`);
      const updatedObject = await pool.query(
        "UPDATE cnf.threeobject SET projectid = $2, type = $3, object = $4 WHERE uuid = $1 RETURNING *",
        [uuid, projectid, type, object]
      );

      if (updatedObject.rows.length === 0) {
        return res
          .status(404)
          .json({ error: "No object found with that uuid" });
      }

      res.json(updatedObject.rows[0]);
    } else {
      return res.status(400).json({ error: "Invalid update_type parameter" });
    }
  } catch (err) {
    console.error(`Error in update Scene Object Router : ${err.message}`);
    res.status(500).send("Server error");
  }
});

export default updateSceneObjectRouter;
