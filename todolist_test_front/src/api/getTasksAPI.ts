import { AxiosResponse } from "axios";
import instanse from "./instanse";
import { getTasksRoute } from "../../../routerConfig";
import { Task_T } from "../../../types";

const getTasksAPI = (): Promise<AxiosResponse<{ tasks: Task_T[] }>> => {
  return instanse.get(getTasksRoute);
};

export default getTasksAPI;
