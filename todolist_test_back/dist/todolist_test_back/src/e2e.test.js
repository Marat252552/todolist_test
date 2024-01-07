"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const routerConfig_1 = require("../../routerConfig");
const instanse = axios_1.default.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
(0, node_test_1.describe)("create-update-get", () => __awaiter(void 0, void 0, void 0, function* () {
    let task_id;
    const text = (0, uuid_1.v4)();
    test("create", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield instanse.post(routerConfig_1.addTaskRoute, { text });
        expect(response.data.task.text).toEqual(text);
        task_id = response.data.task._id;
    }));
    test("complete", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield instanse.put(routerConfig_1.completeTaskRoute, { task_id });
        expect(response.data.task.completed).toBe(true);
    }));
    test("get-all", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield instanse.get(routerConfig_1.getTasksRoute);
        const tasks = response.data.tasks;
        expect(Array.isArray(tasks)).toBeTruthy();
        expect(tasks[0]).toBeDefined();
        instanse.delete(`${routerConfig_1.deleteTaskRoute}?task_id=${task_id}`);
    }));
}));
