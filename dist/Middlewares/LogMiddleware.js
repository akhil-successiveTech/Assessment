"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMiddleware = void 0;
const LogMiddleware = (req, res, next) => {
    try {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp} ${req.method} ${req.originalUrl}`);
        next();
    }
    catch (err) {
        return res.status(500).json({ message: "Log error", error: err.message });
    }
};
exports.LogMiddleware = LogMiddleware;
