import { useEffect, useState } from "react";
import getTasksAPI from "./api/getTasksAPI";
import { Task_T } from "./../../types";
import Task from "./components/Task";
import addTaskAPI from "./api/addTaskAPI";

const App = () => {
  const [tasks, setTasks] = useState<Task_T[]>([]);
  const [value, setValue] = useState<string>("");

  const fetchTasks = async () => {
    const response = await getTasksAPI();
    if (!response.data.tasks) return;
    setTasks(response.data.tasks);
  };
  const addTask = async () => {
    if (!value) return;
    try {
      await addTaskAPI(value);
      fetchTasks();
      setValue("");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center gap-5 p-10">
        <h1 className="text-5xl">TO DO</h1>
        {tasks.length ? (
          tasks.map((task) => {
            return <Task {...task} fetchTasks={fetchTasks} />;
          })
        ) : (
          <div>Нет задач</div>
        )}
        <textarea
          className="border border-solid w-full"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button onClick={addTask}>Создать</button>
      </div>
    </>
  );
};

export default App;
