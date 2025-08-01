"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const ErrorMiddleware = (err, req, res, next) => {
    console.error('Error: ', err.message);
    res.status(500).json({
        success: "false",
        message: "Error occured"
    });
};
exports.ErrorMiddleware = ErrorMiddleware;
