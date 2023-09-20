import express from "express";
import pool from "../database/postgresqlConnection.js";
import ProjectDetails from "../models/projectDetailsModel.js";
const generateSceneRouter = express.Router();

generateSceneRouter.get("/", async (req, res) => {
  try {
    const projectId = req.query.id;
    const configName = req.query.config;
    const variantName = req.query.variant;

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
    if (configName !== "null" && variantName !== "null") {
      try {
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

        const configRes = await pool.query(
          "SELECT * FROM cnf.configdata WHERE configname = $1 AND variant = $2 AND projectid = $3",
          [configName, variantName, projectId]
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

          res.json(output);
        } else {
          res.json({ existing: false });
        }
      } catch (err) {
        console.error(err.message);
        res
          .status(500)
          .json({ success: false, message: "Error deleting configuration." });
      }
    } else if (projectId) {
      try {
        const configRes = await pool.query(
          "SELECT * FROM cnf.configdata WHERE projectid = $1 ORDER BY created_at DESC",
          [projectId]
        );
        if (configRes.rows.length > 0) {
          const configNames = [];
          for (const row of configRes.rows) {
            const configname = row.configname;
            configNames.push(configname);
          }
          const firstConfigName = configNames[0];

          for (const row of configRes.rows) {
            if (row.configname === firstConfigName) {
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
              } // This will print the entire row of data for matching config names
            }
          }
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
          res.json(output);
        } else {
          try {
            const query = `
        SELECT
          a.type,
          a.data AS asset_data,
          t.object AS object_data
        FROM
          cnf.assets AS a
        LEFT JOIN
          cnf.threeobject AS t ON a.projectid = t.projectid
        WHERE
          a.projectid = $1
      `;

            const result = await pool.query(query, [projectId]);

            if (result.rows.length > 0) {
              result.rows.forEach((row) => {
                switch (row.type) {
                  case "geometry":
                    output.geometries.push(row.asset_data);
                    break;
                  case "material":
                    output.materials.push(row.asset_data);
                    break;
                  case "animation":
                    output.animations.push(row.asset_data);
                    break;
                  case "texture":
                    output.textures.push(row.asset_data);
                    break;
                  case "image":
                    output.images.push(row.asset_data);
                    break;
                  case "skeleton":
                    output.skeletons.push(row.asset_data);
                    break;
                }
              });
              if (result.rows[0].object_data) {
                output.object = result.rows[0].object_data;
              } else {
                res.status(404).json({
                  error: `No object found for that project id:${projectId}`,
                });
                return;
              }
              res.json(output);
            } else {
              // If the project doesn't exist in the database, return existing as false
              res.json({ existing: false });
            }
          } catch (err) {
            console.error(err.message);
            res.status(500).json({
              success: false,
              message: "Error deleting configuration.",
            });
          }
        }
      } catch (err) {
        console.error(err.message);
        res
          .status(500)
          .json({ success: false, message: "Error deleting configuration." });
      }
    }
    // Query the assets table
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

generateSceneRouter.get("/checking/:projectId", async (req, res) => {
  const projectId = req.params.projectId;
  console.log("user in checking", projectId);
  try {
    const project = await ProjectDetails.findOne({ _id: projectId });
    console.log("project", project);
    if (project) {
      // If the project exists with the provided projectId, return existing as true
      res.json({ existing: true });
    } else {
      // If the project doesn't exist with the provided projectId, return existing as false
      res.json({ existing: false });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while checking the project." });
  }
});

export default generateSceneRouter;
