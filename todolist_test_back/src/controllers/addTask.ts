import { Request, Response } from "express";
import Task from "../database/models/Task";

const addTaskController = async (
  req: Request<{}, {}, { text: string }>,
  res: Response
) => {
  try {
    const { text } = req.body;
    if (!text) return res.sendStatus(400).end();
    const task = await Task.create({ text });

    res.status(201).json({ task }).end();
  } catch (e) {
    console.log(e);
    res.sendStatus(500).end();
  }
};

export default addTaskController;
