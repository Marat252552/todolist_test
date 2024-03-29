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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DBconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection_string = process.env.MONGO_DB_CONNECTION_STRING;
    if (!connection_string)
        return;
    try {
        yield mongoose_1.default.connect(connection_string);
        if (mongoose_1.default.connection.readyState === 1) {
            console.log("Mongo DB connected");
        }
        else if (mongoose_1.default.connection.readyState === 0) {
            console.log("Mongo DB connection error");
        }
        else {
            console.log(mongoose_1.default.connection.readyState);
        }
    }
    catch (e) {
        console.log(mongoose_1.default.connection.readyState);
        console.log(e);
    }
});
exports.default = DBconnect;
