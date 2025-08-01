import { Router } from "express";
import { User } from "../Models/MongoSchema";

const router = Router();

router.get('/show', async(req, res) => {
    try{
        const data = await User.find();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
});

router.post('/post', async(req, res) => {
    try{
        const data = await User.findByIdAndUpdate(req.params.id)
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message: err});
    }
});

router.put('/');

router.delete('/delete', async(req, res) => {
    try{
        const data = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({message: "Data deleted", user: data});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message: err});
    }
});

export default router;