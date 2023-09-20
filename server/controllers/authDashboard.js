import pool from "../database/postgresqlConnection.js";
import ProjectDetails from "../models/projectDetailsModel.js";
import PaymentData from "../models/paymentModel.js";

export const postProjectName = async (req, res) => {
  try {
    const user = req.user._id;
    console.log(req.body);
    const { nameValue } = req.body;
    const existingProjects = await ProjectDetails.find({ user });
    if (existingProjects) {
      const check = await PaymentData.find({ user_id: user });
      if (check.length > 0) {
        const quantity = parseInt(check[0]?.selectedQuantity);
        const eligible = quantity < existingProjects.length + 1;
        if (eligible) {
          res
            .status(201)
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

export const getProjectsList = async (req, res) => {
  try {
    const user = req.user._id;
    const listProjects = await ProjectDetails.find({ user });
    // console.log(listProjects);
    res.status(200).send({
      success: true,
      data: listProjects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// export const deleteProjectFromID = async (req, res) => {
//   try {
//     const resInSql = await s
//   } catch (error) {
//     console.log(error);
//   }
// }
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
