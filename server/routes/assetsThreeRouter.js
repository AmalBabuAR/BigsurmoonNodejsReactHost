import express from "express";
import pool from "../database/postgresqlConnection.js";
const assets = express.Router();

assets.post("/", async (req, res) => {
  try {
    console.log("coming");
    const { projectid, uuid, type, data } = req.body;
    console.log(uuid);
    const newAsset = await pool.query(
      "INSERT INTO cnf.assets (projectid, uuid, type, data, cnf) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [projectid, uuid, type, data, false]
    );

    res.json(newAsset.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default assets;
