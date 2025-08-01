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
const MongoSchema_1 = require("../Models/MongoSchema");
const router = (0, express_1.Router)();
router.get('/show', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield MongoSchema_1.User.find();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}));
// router.post('/post', async(req, res) => {
//     try{
//         const data = await User.findByIdAndUpdate(req.params.id)
//     }
//     catch(err){
//         console.log(err);
//         return res.status(400).json({message: err});
//     }
// });
// router.put('/');
// router.delete('/delete', async(req, res) => {
//     try{
//         const data = await User.findByIdAndDelete(req.params.id);
//         return res.status(200).json({message: "Data deleted", user: data});
//     }
//     catch(err){
//         console.log(err);
//         return res.status(400).json({message: err});
//     }
// });
exports.default = router;
