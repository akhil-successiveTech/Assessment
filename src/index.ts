import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/UserRoute';
// import { ErrorHandler } from './Middleware/ErrorMiddleware';

const app = express();
app.use('/api', router);
// app.use(ErrorHandler);


mongoose.connect('mongodb://127.0.0.1:27017/testDB')
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
        console.log("Server is running on port 8000!");
    })
  })
  .catch((err) => console.log(err));