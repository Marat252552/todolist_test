"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Task = new mongoose_1.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: new Date() },
});
exports.default = (0, mongoose_1.model)("task", Task);
