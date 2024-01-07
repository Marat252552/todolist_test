import { Request, Response } from "express";
import Task from "../database/models/Task";

const completeCard = async (
  req: Request<{}, {}, { task_id: string }>,
  res: Response
) => {
  try {
    const { task_id } = req.body;
    if (!task_id) return res.sendStatus(400).end();

    const requiredCard = await Task.findById(task_id);
    if (!requiredCard) return res.sendStatus(400).json();

    await Task.updateOne(
      { _id: task_id },
      { completed: !requiredCard.completed }
    );

    const updated_task = await Task.findById(task_id);

    res.status(201).json({ task: updated_task }).end();
  } catch (e) {
    console.log(e);
    res.sendStatus(500).end();
  }
};

export default completeCard;
