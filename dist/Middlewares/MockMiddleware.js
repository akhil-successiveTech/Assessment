"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMiddleware = void 0;
const mockData_1 = require("../Utils/mockData");
const MockMiddleware = (req, res, next) => {
    try {
        res.status(200).json({ data: mockData_1.mockData });
        next();
    }
    catch (err) {
        return res.status(500).json({ message: "Middleware error", error: err.message });
    }
};
exports.MockMiddleware = MockMiddleware;
