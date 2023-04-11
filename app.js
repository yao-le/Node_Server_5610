import express from "express";
import cors from 'cors'
import mongoose from "mongoose";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/musicApp";
// mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());




app.listen(4000, () => {
    console.log(`Listening on port 4000`)
});