import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import session from "express-session";
import multer from "multer";

import albumsController from "./controllers/albums-controller.js";
import tracksController from "./controllers/tracks-controller.js";
import publishersController from "./controllers/publishers-controller.js";
import viewersController from "./controllers/viewers-controller.js";
import adminsController from "./controllers/admins-controller.js";
import collectionsController from "./controllers/collections-controller.js";
import followsController from "./controllers/follows-controller.js";

// hardcode in server for convenience
const CONNECTION_STRING = 'mongodb+srv://zhouliupku:5610final@cluster0.fkuszns.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);


const app = express();
const upload = multer({ dest: './public/images/'})


app.use(
    session({
        secret: "asdfasdfasdfasdf",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());

albumsController(app);
tracksController(app);
publishersController(app, upload);
viewersController(app);
adminsController(app);
collectionsController(app);
followsController(app);

mongoose.connect(CONNECTION_STRING)
app.listen(4000, () => {
    console.log(`Listening on port 4000`)
});