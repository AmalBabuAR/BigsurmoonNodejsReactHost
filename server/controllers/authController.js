import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { isEmail, isLength } from "../utils/validation.js";

export const registerController = async (req, res) => {
  console.log("req in server register");
  try {
    console.log(req.body, "req in body");
    const { name, companyName, email, password, question, answer } =
      req.body.values;
    //validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!companyName) {
      return res.send({ message: "Company Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!question) {
      return res.send({ message: "selected Question is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }
    if (!isEmail(email)) {
      return res.send({ message: "Invalid Email" });
    }
    if (isLength(password)) {
      return res.send({ message: "Password must be at least 6 characters" });
    }
    //check user
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      companyName,
      email,
      question,
      answer,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "Error in Registeratiom",
      error,
    });
  }
};

//POST LOGIN

export const loginController = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body.values;
    //validation
    if (!email || !password) {
      return res.send({
        message: "Invalid email or password",
      });
    }
    if (!isEmail(email)) {
      return res.send({ message: "Invalid Email" });
    }
    if (isLength(password)) {
      return res.send({ message: "Password must be at least 6 characters" });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registred",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    // const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "7d",
    // });
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "60d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      // user: {
      //   _id: user._id,
      //   name: user.name,
      //   companyName: user.companyName,
      //   email: user.email,
      // },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

//POST Forgot Password
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is Required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is Required" });
    }
    //check
    const user = await userModel.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.send(200).send({
      success: true,
      message: "Password Rest Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected route");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
