"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerT = void 0;
const express_1 = require("express");
exports.routerT = (0, express_1.Router)();
exports.routerT.get("/status/:code", (req, res) => {
    const code = parseInt(req.params.code);
    switch (code) {
        case 200:
            return res.status(200).json({ message: "OK" });
        case 201:
            return res.status(201).json({ message: "Created" });
        case 204:
            return res.status(204).send(); // No content
        case 400:
            return res.status(400).json({ error: "Bad Request" });
        case 401:
            return res.status(401).json({ error: "Unauthorized" });
    }
});
