import express from "express";
import pool from "../database/postgresqlConnection.js";
const assets = express.Router();

assets.post("/", async (req, res) => {
  try {
    console.log("coming");
    const { projectid, uuid, type, data } = req.body;
    console.log(uuid);
    const newAsset = await pool.query(
      "INSERT INTO cnf.assets (projectid, uuid, type, data) VALUES($1, $2, $3, $4) RETURNING *",
      [projectid, uuid, type, data]
    );

    res.json(newAsset.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default assets;
