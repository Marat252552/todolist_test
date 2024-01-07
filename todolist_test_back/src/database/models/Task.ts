import { Schema, model } from "mongoose";

const Task = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: new Date() },
});

export default model("task", Task);
