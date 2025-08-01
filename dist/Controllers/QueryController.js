"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMiddleware = void 0;
const QueryMiddleware = (req, res, next) => {
    const { key, value } = req.query;
    if (isNaN(Number(key))) {
        return res.status(400).json({ message: "Key is not a number" });
    }
    if (isNaN(Number(value))) {
        return res.status(400).json({ message: "Value is not a number" });
    }
    next();
};
exports.QueryMiddleware = QueryMiddleware;
