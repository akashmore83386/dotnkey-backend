import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const connectDB = async () => {
  try {
    const CONNECTION_URL = process.env.DATABASE;
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection established");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectDB;