import instanse from "./instanse";
import { addTaskRoute } from "../../../routerConfig";

const addTaskAPI = (text: string) => {
  return instanse.post(addTaskRoute, { text });
};

export default addTaskAPI;
