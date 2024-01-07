import { Request, Response } from "express";
import Task from "../database/models/Task";

const deleteTask = async (req: Request<{ task_id: string }>, res: Response) => {
  try {
    const { task_id } = req.query;
    if (!task_id) return res.sendStatus(400).end();

    await Task.findByIdAndDelete(task_id);

    res.sendStatus(200).end();
  } catch (e) {
    console.log(e);
    res.sendStatus(500).end();
  }
};

export default deleteTask;
