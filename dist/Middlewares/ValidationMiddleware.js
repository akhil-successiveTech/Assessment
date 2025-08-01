"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const UserSchema_1 = require("../Models/UserSchema");
const Validation = (req, res, next) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ message: "Enter the values!" });
    }
    if (UserSchema_1.Student.validate(data)) {
        return res.status(200).json({ message: "Data is valid!" });
    }
    return res.status(400).json({ message: "Data is invalid!" });
};
exports.Validation = Validation;
