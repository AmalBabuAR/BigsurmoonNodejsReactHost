import express from "express";
import pool from "../database/postgresqlConnection.js";
const getVareintRouter = express.Router();

getVareintRouter.get("/", async (req, res) => {
  const configName = req.query.config;
  const id = req.query.id;

  const output = {
    metadata: {
      version: 4.3,
      type: "Object",
      generator: "Object3D.toJSON",
    },
    geometries: [],
    materials: [],
    animations: [],
    textures: [],
    images: [],
    skeletons: [],
    object: {},
  };

  try {
    // Query the assets table
    const assetsRes = await pool.query(
      "SELECT * FROM cnf.assets WHERE projectid = $1",
      [id]
    );
    assetsRes.rows.forEach((row) => {
      if (row.type === "geometry") {
        output.geometries.push(row.data);
      } else if (row.type === "animation") {
        output.animations.push(row.data);
      } else if (row.type === "skeleton") {
        output.skeletons.push(row.data);
      }
    });

    const configRes = await pool.query(
      "SELECT * FROM cnf.configdata WHERE configname = $1 AND projectid = $2",
      [configName, id]
    );

    if (configRes.rows.length > 0) {
      configRes.rows.forEach((row) => {
        if (row.objecttype === "materials") {
          row.data.forEach((data) => {
            output.materials.push(data);
          });
        } else if (row.objecttype === "object") {
          output.object = row.data;
        } else if (row.objecttype === "textures") {
          row.data.forEach((data) => {
            output.textures.push(data);
          });
        } else if (row.objecttype === "images") {
          row.data.forEach((data) => {
            output.images.push(data);
          });
        }
      });
      res.json({ data: output, success: true });
    } else {
      console.log("No result found for the given configName and projectId.");
      return null;
    }

    // Respond with a success message
    // res.json({ success: true, message: "Configuration deleted successfully." });
  } catch (err) {
    console.error(`Error in get Vareint Router: ${err.message}`);
    res
      .status(500)
      .json({ success: false, message: "Error deleting configuration." });
  }
});

export default getVareintRouter;
