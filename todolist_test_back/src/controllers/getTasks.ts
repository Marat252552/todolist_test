import { Request, Response } from "express";
import Task from "../database/models/Task";

const getCards = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.json({ tasks });
  } catch (e) {
    console.log(e);
    res.sendStatus(400).end();
  }
};

export default getCards;
