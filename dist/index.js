"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoute_1 = __importDefault(require("./Routes/UserRoute"));
// import { ErrorHandler } from './Middleware/ErrorMiddleware';
const app = (0, express_1.default)();
app.use('/api', UserRoute_1.default);
// app.use(ErrorHandler);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/testDB')
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
        console.log("Server is running on port 8000!");
    });
})
    .catch((err) => console.log(err));
