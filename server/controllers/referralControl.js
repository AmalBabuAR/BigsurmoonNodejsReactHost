import { isEmail } from "../utils/validation.js";
import referralEmailModel from "../models/referralEmailModel.js";

export const referralEmailSubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.send({
        message: "Invalid email",
      });
    }
    if (!isEmail(email)) {
      return res.send({ message: "Invalid Email" });
    }

    // check Email
    const existingEmail = await referralEmailModel.findOne({ email });
    // console.log(existingEmail);
    if (existingEmail) {
      return res.status(200).send({
        success: false,
        message: "Email Already Registered",
      });
    }

    const saveEmail = await new referralEmailModel({ email }).save();
    res.status(201).send({
      success: true,
      message: "Email Register Successfully",
    });
    // console.log(saveEmail);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "Error in Subscription",
      error,
    });
  }
};
