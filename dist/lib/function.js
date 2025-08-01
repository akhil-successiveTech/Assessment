"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
const lodash_1 = __importDefault(require("lodash"));
function add(num1, num2) {
    return lodash_1.default.add(num1, num2);
}
function subtract(num1, num2) {
    return lodash_1.default.subtract(num1, num2);
}
function multiply(num1, num2) {
    return lodash_1.default.multiply(num1, num2);
}
function divide(num1, num2) {
    if (lodash_1.default.isEqual(num2, 0)) {
        throw new Error("Division by zero is not allowed");
    }
    return lodash_1.default.divide(num1, num2);
}
