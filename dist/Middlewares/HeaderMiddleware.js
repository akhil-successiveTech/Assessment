"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderMiddleware = void 0;
const HeaderMiddleware = (req, res, next) => {
    try {
        res.setHeader('User', 'Akhil');
    }
    catch (err) {
        return res.status(500).json({ message: "Middleware error", error: err.message });
    }
};
exports.HeaderMiddleware = HeaderMiddleware;
