import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://localhost:27017/kayhantech`
    );
    console.log(
      `MongoDB connected successfully !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
