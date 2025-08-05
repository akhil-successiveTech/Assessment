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

router.post('/post/:id', async(req, res) => {
    try{
        const data = await User.findByIdAndUpdate(req.params.id)
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message: err});
    }
});

router.put('/update/:id', async(req, res) => {
    try {
    const update = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!update) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User updated', user: update });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: 'Error updating user', error: err });
  }
});

router.delete('/delete/:id', async(req, res) => {
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