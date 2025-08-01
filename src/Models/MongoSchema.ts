import { date, number, string } from "joi";
import mongoose from "mongoose";

const MongoSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true},
    grade: {type: String,required: true},
    email: {type: String, required: true},
    createdAt: { type: Date,required: true},
})

export const User = mongoose.model("User", MongoSchema);