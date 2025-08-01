"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidController = void 0;
const UserSchema_1 = require("../Models/UserSchema");
const ValidController = (req, res, next) => {
    try {
        const data = req.body;
        const { error, value } = UserSchema_1.userSchema.validate(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
        console.log(value);
        next();
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
exports.ValidController = ValidController;
