"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMiddleware = void 0;
const QueryMiddleware = (req, res, next) => {
    const { key, value } = req.query;
    if (!key) {
        return res.status(400).json({ message: "Key not available" });
    }
    if (!value) {
        return res.status(400).json({ message: "Value not available" });
    }
    next();
};
exports.QueryMiddleware = QueryMiddleware;
