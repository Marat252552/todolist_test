import { describe } from "node:test";
import axios from "axios";
import { v4 } from "uuid";
import {
  addTaskRoute,
  completeTaskRoute,
  deleteTaskRoute,
  getTasksRoute,
} from "../../routerConfig";

const instanse = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

describe("create-update-get", async () => {
  let task_id: string | undefined;
  const text = v4();
  test("create", async () => {
    const response = await instanse.post(addTaskRoute, { text });
    expect(response.data.task.text).toEqual(text);
    task_id = response.data.task._id;
  });
  test("complete", async () => {
    const response = await instanse.put(completeTaskRoute, { task_id });
    expect(response.data.task.completed).toBe(true);
  });
  test("get-all", async () => {
    const response = await instanse.get(getTasksRoute);
    const tasks = response.data.tasks;
    expect(Array.isArray(tasks)).toBeTruthy();
    expect(tasks[0]).toBeDefined();

    instanse.delete(`${deleteTaskRoute}?task_id=${task_id}`);
  });
});
