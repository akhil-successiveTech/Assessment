"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MongoUser = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true }
});
exports.User = mongoose_1.default.model("User", MongoUser);
