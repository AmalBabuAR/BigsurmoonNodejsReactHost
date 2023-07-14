import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
  try {
    //mongodb connection string
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDb connected : ${conn.connection.host}`.magenta);
  } catch (error) {
    console.log(`Error in MongoDb${error}`.red);
    process.exit(1);
  }
};

export default connectDB;
