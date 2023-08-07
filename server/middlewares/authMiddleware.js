import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token base
// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.log("error in jwt middleware", error);
//     res.status(401).json({ error, success: false, message: "no token" });
//   }
// };


export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }
    try {
      const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decodedToken;
      console.log(req.user );
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        res.status(401).json({ noToken: true, message: "Login Expires, please log in"});
      } else {
        console.log('Error in jwt middleware', error);
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
    }
  } catch (error) {
    console.log('Error in jwt middleware', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


async function generateAccessToken(userId) {
  return JWT.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}


// admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        messsage: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      error,
      messsage: "Error in admin middlewares",
    });
  }
};
