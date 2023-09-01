import express from "express";
import pool from "../database/postgresqlConnection.js";
const getVareintRouter = express.Router();

getVareintRouter.get("/", async (req, res) => {
  console.log("req in get");
  const configName = req.query.config;
  const id = req.query.id;

  console.log(configName, id);
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
      console.log("Result found:", configRes.rows);
      configRes.rows.forEach((row) => {
        if (row.objecttype === "materials") {
          const materialData = {
            // Use configname as the name
            materials: row.data, // Use the data field as materials
          };
          console.log("_______________", row.data[0]);
          output.materials.push(row.data[0]);
        } else if (row.objecttype === "object") {
          const objectData = {
            // Use configname as the name
            object: row.data, // Use the data field as data
          };
          output.object = row.data;
        } else if (row.objecttype === "textures") {
          const texturesData = {
            // Use configname as the name
            textures: row.data, // Use the data field as data
          };
          output.textures.push(row.data[0]);
        } else if (row.objecttype === "images") {
          const imagesData = {
            variant: row.variant,
            name: row.configname, // Use configname as the name
            images: row.data, // Use the data field as data
          };
          output.images.push(row.data[0]);
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
    console.error(err.message);
    res
      .status(500)
      .json({ success: false, message: "Error deleting configuration." });
  }
});

export default getVareintRouter;
