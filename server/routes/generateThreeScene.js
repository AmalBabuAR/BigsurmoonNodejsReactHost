import express from "express";
import pool from "../database/postgresqlConnection.js";
const generateSceneRouter = express.Router();

generateSceneRouter.get("/:projectId", async (req, res) => {
  console.log("req cm in generate_scene");
  try {
    const projectId = req.params.projectId;
    const output = {
      metadata: {
        version: 4.3,
        type: "Object",
        generator: "ObjectExporter",
      },
      geometries: [],
      materials: [],
      animations: [],
      textures: [],
      images: [],
      skeletons: [],
      object: {},
    };

    // Query the assets table
    const assetsRes = await pool.query(
      "SELECT * FROM cnf.assets WHERE projectid = $1",
      [projectId]
    );

    assetsRes.rows.forEach((row) => {
      if (row.type === "geometry") {
        output.geometries.push(row.data);
      } else if (row.type === "material") {
        output.materials.push(row.data);
      } else if (row.type === "animation") {
        output.animations.push(row.data);
      } else if (row.type === "texture") {
        output.textures.push(row.data);
      } else if (row.type === "image") {
        output.images.push(row.data);
      } else if (row.type === "skeleton") {
        output.skeletons.push(row.data);
      }
    });

    // Query the threeobject table
    const objectRes = await pool.query(
      "SELECT object FROM cnf.threeobject WHERE projectid = $1",
      [projectId]
    );

    if (objectRes.rows.length > 0) {
      output.object = objectRes.rows[0].object;
    } else {
      res.status(404).json({ error: "No object found for that project id" });
      return;
    }

    res.json(output);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default generateSceneRouter;
