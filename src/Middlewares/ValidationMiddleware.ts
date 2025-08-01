import { Request, Response, NextFunction } from "express"
import { Student } from "../Models/UserSchema";

export const Validation = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    if(!data){
        return res.status(400).json({message: "Enter the values!"});
    }
    if(Student.validate(data)){
        return res.status(200).json({message: "Data is valid!"});
    }
    return res.status(400).json({message: "Data is invalid!"});
}