import dotenv from "dotenv";
import DBconnect from "./database/DBconnect";
import http from "http";
import { app } from "./app";
dotenv.config();

const server = http.createServer(app);

let Start = () => {
  let PORT = process.env.PORT || 3000;
  try {
    DBconnect();
    server.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

Start();
