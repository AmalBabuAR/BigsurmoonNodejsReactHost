import pool from "../database/postgresqlConnection.js";
import ProjectDetails from "../models/projectDetailsModel.js";
import PaymentData from "../models/paymentModel.js";
import userModel from "../models/userModel.js";
import TestingProject from "../models/testingProjectModel.js";

export const postProjectName = async (req, res) => {
  try {
    const user = req.user._id;
    // console.log(req.body);
    const { nameValue } = req.body;
    const existingProjects = await ProjectDetails.find({ user });
    if (existingProjects) {
      const check = await PaymentData.find({ user_id: user });
      if (check.length > 0) {
        const quantity = parseInt(check[0]?.selectedQuantity);
        const eligible = quantity < existingProjects.length + 1;
        if (eligible) {
          res
            .status(200)
            .json({ status: false, message: "Upgrade Your Subscription Plan" });
        } else {
          if (existingProjects.length > 0) {
            const existingNames = new Set(
              existingProjects.map((project) => project.name)
            );
            if (existingNames.has(`${nameValue}`)) {
              console.log(existingNames);
              res
                .status(201)
                .json({ status: false, message: "Project Name already Exist" });
              console.log("name is already exist");
            } else {
              const data = {
                user,
                name: nameValue,
              };
              const newProject = new ProjectDetails(data);
              await newProject.save();
              res.status(201).json({ newProject, status: true });
            }
          } else {
            const data = {
              user,
              name: nameValue,
            };
            const newProject = new ProjectDetails(data);
            await newProject.save();
            res.status(201).json({ newProject, status: true });
          }
        }
      } else {
        res.status(201).json({
          status: false,
          noSub: true,
          message: "Please Chosse a Subscription Plan",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

function parseDate(dateString) {
  const parts = dateString.split("-");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are zero-indexed
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}

export const getProjectsSize = async (req, res) => {
  try {
    const user = req.user._id;
    const existingProjects = await TestingProject.find({ userId: user });
    console.log("existingProjects", existingProjects);
    if (existingProjects.length > 0) {
      const check = await PaymentData.find({ user_id: user });
      if (check.length > 0) {
        const quantity = parseInt(check[0]?.selectedQuantity);
        const per = (existingProjects.length / quantity) * 100;
        const projectSize = {
          used: existingProjects.length,
          quantity: quantity,
          percentage: per,
        };
        let daysLeft = 0;
        if (
          check[0]?.trialPeriodStatus?.trialStart &&
          check[0]?.trialPeriodStatus?.trialEnd
        ) {
          const currentDate = new Date();
          const endDate = parseDate(check[0]?.trialPeriodStatus?.trialEnd);
          const timeDiff = endDate - currentDate;
          daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        }

        res.status(200).send({ success: true, projectSize, daysLeft });
      } else {
        res.status(200).send({ success: false });
      }
    } else {
      res.status(200).send({ success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsList = async (req, res) => {
  try {
    // console.log("coming");
    const user = req.user._id;
    const listProjects = await ProjectDetails.find({ user });
    // console.log("listProjects", listProjects);
    const currentDate = new Date();

    // Calculate and update the projects with the formatted time difference
    const projectsWithFormattedTime = listProjects.map((project) => {
      const projectDate = project.createdAt;
      const timeDifference = currentDate - projectDate;
      const yearsAgo = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24 * 365.25)
      ); // Average days in a year
      const monthsAgo = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24 * 30.44)
      ); // Average days in a month
      const weeksAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesAgo = Math.floor(timeDifference / (1000 * 60));

      let formattedTime;

      if (yearsAgo > 0) {
        formattedTime = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
      } else if (monthsAgo > 0) {
        formattedTime = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
      } else if (weeksAgo > 0) {
        formattedTime = `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
      } else if (daysAgo > 0) {
        formattedTime = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
      } else if (hoursAgo > 0) {
        formattedTime = `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
      } else {
        formattedTime = `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
      }

      return {
        _id: project._id,
        user: project.user,
        name: project.name,
        formattedTime,
        createdAt: project.createdAt,
      };
    });

    const sortedProjects = projectsWithFormattedTime.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    const sortedData = sortedProjects.map((project) => ({
      _id: project._id,
      user: project.user,
      name: project.name,
      formattedTime: project.formattedTime,
    }));

    // console.log(projectsWithFormattedTime);

    res.status(200).send({
      success: true,
      data: sortedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProjectFromID = async (req, res) => {
  const projectId = req.params.id;
  console.log(projectId);
  try {
    await pool.query("DELETE FROM cnf.assets WHERE projectId = $1", [
      projectId,
    ]);
    await pool.query("DELETE FROM cnf.threeobject WHERE projectId = $1", [
      projectId,
    ]);
    await pool.query("DELETE FROM cnf.configdata WHERE projectId = $1", [
      projectId,
    ]);
    await ProjectDetails.findByIdAndDelete(projectId);

    res.json({ success: true, message: "Project deleted successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error deleting project." });
  }
};

export const getUserName = async (req, res) => {
  const user = req.user._id;
  try {
    const userName = await userModel.find({ _id: user });
    if (userName && userName.length > 0) {
      const name = userName[0].name;
      res.status(200).json({ success: true, name });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
