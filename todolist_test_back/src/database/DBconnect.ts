import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBconnect = async () => {
  const connection_string = process.env.MONGO_DB_CONNECTION_STRING;
  if (!connection_string) return;
  try {
    await mongoose.connect(connection_string);
    if (mongoose.connection.readyState === 1) {
      console.log("Mongo DB connected");
    } else if (mongoose.connection.readyState === 0) {
      console.log("Mongo DB connection error");
    } else {
      console.log(mongoose.connection.readyState);
    }
  } catch (e) {
    console.log(mongoose.connection.readyState);
    console.log(e);
  }
};

export default DBconnect;
