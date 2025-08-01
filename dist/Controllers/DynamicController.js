"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const RoleController = (req, res) => {
    const { name, role, subject } = req.body;
    if (role === "Student") {
        return res.status(200).json({ message: `Student ${name} registered successfully.` });
    }
    else if (role === "Teacher") {
        return res.status(200).json({ message: `Teacher ${name} (Subject: ${subject}) registered successfully.` });
    }
    else {
        return res.status(400).json({ message: "Unknown role." });
    }
};
exports.RoleController = RoleController;
