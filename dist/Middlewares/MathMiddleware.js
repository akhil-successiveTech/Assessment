"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathMiddleware = void 0;
const MathMiddleware = (req, res, next) => {
    try {
        const { num1, num2, operation } = req.body;
        if (num1 === undefined) {
            return res.status(400).json({ message: "Number1 not available" });
        }
        if (num2 === undefined) {
            return res.status(400).json({ message: "Number2 not available" });
        }
        if (!operation) {
            return res.status(400).json({ message: "Operation not available" });
        }
        next();
    }
    catch (err) {
        return res.status(500).json({ message: "Middleware error", error: err.message });
    }
};
exports.MathMiddleware = MathMiddleware;
