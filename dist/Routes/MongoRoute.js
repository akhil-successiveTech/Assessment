"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MongoUser_1 = require("../Models/MongoUser");
const router = (0, express_1.Router)();
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new MongoUser_1.User(req.body);
        const result = yield user.save();
        res.status(201).json({ result });
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield MongoUser_1.User.find();
    res.status(200).json(user);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield MongoUser_1.User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ updated });
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}));
