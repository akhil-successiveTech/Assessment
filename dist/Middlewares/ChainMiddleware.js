"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware3 = exports.Middleware2 = exports.Middleware1 = void 0;
const Middleware1 = (req, res, next) => {
    console.log("Middleware 1");
    next();
};
exports.Middleware1 = Middleware1;
const Middleware2 = (req, res, next) => {
    console.log("Middleware 2");
    next();
};
exports.Middleware2 = Middleware2;
const Middleware3 = (req, res, next) => {
    console.log("Middleware 3");
    return res.status(200).json({ message: "All middlewares run successfully!" });
};
exports.Middleware3 = Middleware3;
