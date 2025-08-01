"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToCSV = void 0;
const fs_1 = __importDefault(require("fs"));
const saveToCSV = (filename, data) => {
    const csv = data.map(row => row.join(",")).join("\n");
    fs_1.default.writeFile(filename, csv, () => {
        console.log("File saved");
    });
};
exports.saveToCSV = saveToCSV;
