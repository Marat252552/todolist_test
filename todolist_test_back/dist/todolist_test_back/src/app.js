"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const addTask_1 = __importDefault(require("./controllers/addTask"));
const getTasks_1 = __importDefault(require("./controllers/getTasks"));
const completeTask_1 = __importDefault(require("./controllers/completeTask"));
const routerConfig_1 = require("./../../routerConfig");
const deleteTask_1 = __importDefault(require("./controllers/deleteTask"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
let jsonBodyMiddleware = express_1.default.json();
exports.app.use((0, cors_1.default)({
    origin: process.env.FRONT_URL,
    credentials: true,
}));
exports.app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
exports.app.use(jsonBodyMiddleware);
exports.app.post(routerConfig_1.addTaskRoute, addTask_1.default);
exports.app.get(routerConfig_1.getTasksRoute, getTasks_1.default);
exports.app.put(routerConfig_1.completeTaskRoute, completeTask_1.default);
exports.app.delete(routerConfig_1.deleteTaskRoute, deleteTask_1.default);
