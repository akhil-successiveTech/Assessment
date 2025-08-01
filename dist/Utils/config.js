"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Student = void 0;
const joi_1 = __importDefault(require("joi"));
exports.Student = joi_1.default.object({
    name: joi_1.default.string().min(5).required(),
    role: joi_1.default.string().required()
});
exports.Teacher = joi_1.default.object({
    name: joi_1.default.string().min(7).required(),
    role: joi_1.default.string().required(),
    subject: joi_1.default.string().required()
});
