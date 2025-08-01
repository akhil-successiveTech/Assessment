"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthMiddleware = (req, res, next) => {
    try {
        const user = req.headers['authorization'];
        if (!user) {
            return res.status(400).json({ message: "Header not found" });
        }
        const token = user.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token not provided" });
        }
        jsonwebtoken_1.default.verify(token, "secret-key", (error, user) => {
            if (error) {
                return res.status(400).json({ message: "Invalid token" });
            }
            req.user = user;
            next();
        });
    }
    catch (err) {
        return res.status(500).json({ message: "Authentication error", error: err.message });
    }
};
exports.AuthMiddleware = AuthMiddleware;
