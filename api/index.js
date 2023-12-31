import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to MongoDB");
        })

        .catch((err) => {
            console.log(err);
        })

const app = express();

app.listen(5173, () => {
    console.log('Server listening on port 5173!');
} );