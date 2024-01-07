import { getDate } from "../utils.ts/getDate";
import { Task_T } from "../../../types";
import { useState } from "react";
import completeTaskAPI from "../api/completeTaskAPI";
import Spinner from "./Spinner";

interface TaskProps extends Task_T {
  fetchTasks: () => Promise<void>;
}

const Task = ({ created_at, completed, text, fetchTasks, _id }: TaskProps) => {
  const [loading, setLoading] = useState(false);
  const completeTask = async (task_id: string) => {
    setLoading(true);
    try {
      await completeTaskAPI(task_id);
      fetchTasks();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col bg-red-200 w-full p-5 border rounded-lg">
      <div className="flex justify-between">
        {getDate(created_at)}
        {loading ? (
          <Spinner />
        ) : (
          <button
            className={`border-solid border-2 border-indigo-600 rounded-lg p-3 ${
              completed ? "border-green-500" : "border-red-500"
            }`}
            onClick={() => completeTask(_id)}
          >
            {completed ? "Выполнено" : "Не выполнено"}
          </button>
        )}
      </div>

      <div>{text}</div>
    </div>
  );
};

export default Task;
