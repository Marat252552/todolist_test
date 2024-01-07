import instanse from "./instanse";
import { completeTaskRoute } from "../../../routerConfig";

const completeTaskAPI = (task_id: string) => {
  return instanse.put(completeTaskRoute, { task_id });
};

export default completeTaskAPI;
