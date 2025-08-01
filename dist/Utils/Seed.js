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
exports.seedUsers = void 0;
const MongoUser_1 = require("../Models/MongoUser");
const seedData_1 = require("./seedData");
const seedUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hasData = yield MongoUser_1.User.exists({});
        if (hasData) {
            console.log("Data exists!");
        }
        else {
            yield MongoUser_1.User.insertMany(seedData_1.seedData);
            console.log("Seeding completed!");
            res.status(200).json({ message: "Seeding got successful!" });
        }
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Seeding failed", error: err });
    }
});
exports.seedUsers = seedUsers;
