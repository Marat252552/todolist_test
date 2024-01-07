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
const Task_1 = __importDefault(require("../database/models/Task"));
const completeCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task_id } = req.body;
        if (!task_id)
            return res.sendStatus(400).end();
        const requiredCard = yield Task_1.default.findById(task_id);
        if (!requiredCard)
            return res.sendStatus(400).json();
        yield Task_1.default.updateOne({ _id: task_id }, { completed: !requiredCard.completed });
        const updated_task = yield Task_1.default.findById(task_id);
        res.status(201).json({ task: updated_task }).end();
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500).end();
    }
});
exports.default = completeCard;
