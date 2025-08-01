"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidMiddleware = void 0;
const ValidMiddleware = (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        if (!username) {
            return res.status(400).json({ message: "Username not found" });
        }
        if (!email) {
            return res.status(400).json({ message: "Email not found" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password not found" });
        }
        next();
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
exports.ValidMiddleware = ValidMiddleware;
