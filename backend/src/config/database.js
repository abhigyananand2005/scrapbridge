import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(env.mongoUri);

    console.log(
      `[database] MongoDB connected: ${connection.connection.host}`,
    );
  } catch (error) {
    console.error(`[database] Connection failed: ${error.message}`);
    throw error;
  }
};
