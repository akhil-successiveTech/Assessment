"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateMiddleware = void 0;
let count = 0;
let startTime = Date.now();
let limit = 5;
let windowTime = 30000;
const RateMiddleware = (req, res, next) => {
    try {
        const now = Date.now();
        if (now - startTime > windowTime) {
            count = 0;
            startTime = now;
        }
        if (count < limit) {
            count++;
            next();
        }
        else {
            return res.status(429).json({ message: "Too many requests!" });
        }
    }
    catch (err) {
        return res.status(429).json({ message: err.message || 'Internal server error' });
    }
};
exports.RateMiddleware = RateMiddleware;
