"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicMiddleware = void 0;
const Config_1 = require("../Models/Config");
const DynamicMiddleware = (req, res, next) => {
    const data = req.body;
    let error;
    if (data.role === "Student") {
        const result = Config_1.Student.validate(data);
        error = result.error;
    }
    else if (data.role === "Teacher") {
        const result = Config_1.Teacher.validate(data);
        error = result.error;
    }
    else {
        return res.status(400).json({ message: "Enter valid role!" });
    }
    if (error) {
        return res.status(400).json({ message: "Error occured!" });
    }
    next();
};
exports.DynamicMiddleware = DynamicMiddleware;
