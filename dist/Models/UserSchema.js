"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const joi_1 = __importDefault(require("joi"));
exports.Student = joi_1.default.object({
    name: joi_1.default.string().required(),
    age: joi_1.default.number().required().min(5),
    grade: joi_1.default.string().required().length(1),
    email: joi_1.default.string().required().email(),
    createdAt: joi_1.default.date()
});
