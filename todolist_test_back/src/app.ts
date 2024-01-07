import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import addTask from "./controllers/addTask";
import getTasks from "./controllers/getTasks";
import completeTask from "./controllers/completeTask";
import {
  addTaskRoute,
  completeTaskRoute,
  deleteTaskRoute,
  getTasksRoute,
} from "./../../routerConfig";
import deleteTask from "./controllers/deleteTask";
dotenv.config();

export const app = express();

let jsonBodyMiddleware = express.json();

app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(jsonBodyMiddleware);

app.post(addTaskRoute, addTask);
app.get(getTasksRoute, getTasks);
app.put(completeTaskRoute, completeTask);
app.delete(deleteTaskRoute, deleteTask);
