import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected");
    });
    mongoose.connect("mongodb://127.0.0.1:27017/Ornamentra");
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDB;
