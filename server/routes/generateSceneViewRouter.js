import express from "express";
import pool from "../database/postgresqlConnection.js";
const generateSceneViewRouter = express.Router();

generateSceneViewRouter.get("/:projectId", async (req, res) => {
  try {
    const projectId = req.params.projectId;
    console.log("req cm in generate_sceneDDDD", projectId);
    console.log(projectId);
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
      objects: [],
    };

    // Query the assets table
    const assetsRes = await pool.query(
      "SELECT * FROM cnf.assets WHERE projectid = $1",
      [projectId]
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

    //config
    const configRes = await pool.query(
      "SELECT * FROM cnf.configdata WHERE projectid = $1",
      [projectId]
    );
    configRes.rows.forEach((row) => {
      if (row.objecttype === "materials") {
        const materialData = {
          variant: row.variant,
          name: row.configname, // Use configname as the name
          variantcontainer: row.variantcontainer,
          materials: row.data, // Use the data field as materials
        };
        output.materials.push(materialData);
      } else if (row.objecttype === "object") {
        const objectData = {
          variant: row.variant,
          name: row.configname, // Use configname as the name
          variantcontainer: row.variantcontainer,
          object: row.data, // Use the data field as data
        };
        output.objects.push(objectData);
      } else if (row.objecttype === "textures") {
        const texturesData = {
          variant: row.variant,
          name: row.configname, // Use configname as the name
          variantcontainer: row.variantcontainer,
          textures: row.data, // Use the data field as data
        };
        output.textures.push(texturesData);
      } else if (row.objecttype === "images") {
        const imagesData = {
          variant: row.variant,
          name: row.configname, // Use configname as the name
          variantcontainer: row.variantcontainer,
          images: row.data, // Use the data field as data
        };
        output.images.push(imagesData);
      }
    });

    res.json(output);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default generateSceneViewRouter;
