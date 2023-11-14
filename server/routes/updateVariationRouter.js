import express from "express";
import pool from "../database/postgresqlConnection.js";

const updateVariationRouter = express.Router();

updateVariationRouter.post("/", async (req, res) => {
  const { searchQuery, updateQuery, typedValue } = req.body;
  const { variant, configname, projectId, variantContainer, created_at } =
    searchQuery;
  const { object } = updateQuery;

  if (typedValue) {
    const check = await checkForVarient();
    // console.log("check", check);
    if (check) {
      res.json({
        success: false,
        message: "Configuration already exists!",
        configname,
        typedValue,
        variant,
        variantContainer,
      });
    } else {
      const deleteData = await deleteThePrev(variant, projectId, configname);
      // console.log("deleteData", deleteData);
      if (deleteData) {
        const updateData = await insertNewData(projectId, variant, typedValue);
        // console.log("updateData", updateData);
        if (updateData) {
          res.json({
            success: true,
            message: "Configuration updated successfully!",
            data: typedValue,
          });
        } else {
          res.json({
            success: false,
            message: "Server Error",
          });
        }
      } else {
        res.json({
          success: false,
          message: "Server Error!",
          configname,
          typedValue,
          variant,
          variantContainer,
        });
      }
    }
  } else {
    const deleteData = await deleteThePrev(variant, projectId, configname);
    if (deleteData) {
      const updateData = await insertNewData(projectId, variant, configname);
      if (updateData) {
        res.json({
          success: true,
          message: "Configuration updated successfully!",
          data: configname,
          noTyped: true,
        });
      } else {
        res.json({
          success: false,
          message: "Server Error",
        });
      }
    } else {
      res.json({
        success: false,
        message: "Server Error!",
        configname,
        typedValue,
        variant,
        variantContainer,
      });
    }
  }

  async function insertNewData(projectId, variant, value) {
    // value is for typedVarent || configname
    try {
      const objectTypes = ["materials", "textures", "images", "object"];
      for (const objectType of objectTypes) {
        if (object.hasOwnProperty(objectType)) {
          const cuid = `${projectId}-${variant}-${value}-${objectType}`;
          // Update the existing record
          const resData = await pool.query(
            "INSERT INTO cnf.configdata (cuid, variant, configname, objecttype, projectid, data,variantcontainer, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            [
              cuid,
              variant,
              value,
              objectType,
              projectId,
              JSON.stringify(object[objectType]),
              variantContainer,
              created_at,
            ]
          );
          if (resData.rowCount === 0) {
            // If any insertion fails, return false
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function deleteThePrev(variant, projectId, configname) {
    try {
      const deleteConfig = await pool.query(
        "DELETE FROM cnf.configdata WHERE variant = $1 AND projectid = $2  AND configname = $3",
        [variant, projectId, configname]
      );
      if (deleteConfig.rowCount !== 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function checkForVarient() {
    try {
      let contentExists = false;
      const objectTypes = ["materials", "textures", "images", "object"];
      // const cuid = `${projectId}-${variant}-${typedValue}-${objectType}`;
      for (const objectType of objectTypes) {
        if (object.hasOwnProperty(objectType)) {
          // Construct the unique ID
          const cuid = `${projectId}-${variant}-${typedValue}-${objectType}`;
          const result = await pool.query(
            "SELECT cuid FROM cnf.configdata WHERE cuid = $1",
            [cuid]
          );
          if (result.rows.length > 0) {
            contentExists = true;
            return contentExists;
          } else {
            return contentExists;
          }
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
});

export default updateVariationRouter;
