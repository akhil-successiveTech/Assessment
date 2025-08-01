"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathController = void 0;
const function_1 = require("../lib/function");
const SavetoCSV_1 = require("../Utils/SavetoCSV");
const MathController = (req, res) => {
    const { num1, num2, operation } = req.body;
    let answer = 0;
    if (operation === 'add') {
        res.status(200).json({ message: "Added", data: (0, function_1.add)(num1, num2) });
        answer = (0, function_1.add)(num1, num2);
    }
    else if (operation === 'mul') {
        res.status(200).json({ message: "Added", data: (0, function_1.multiply)(num1, num2) });
        answer = (0, function_1.multiply)(num1, num2);
    }
    else if (operation === 'div') {
        res.status(200).json({ message: "Added", data: (0, function_1.divide)(num1, num2) });
        answer = (0, function_1.divide)(num1, num2);
    }
    else if (operation === 'sub') {
        res.status(200).json({ message: "Added", data: (0, function_1.subtract)(num1, num2) });
        answer = (0, function_1.subtract)(num1, num2);
    }
    const csvData = [
        ["Input1", "Input2", "Result"],
        [String(num1), String(num2), String(answer)]
    ];
    (0, SavetoCSV_1.saveToCSV)("result.csv", csvData);
};
exports.MathController = MathController;
