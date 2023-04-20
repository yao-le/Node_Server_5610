import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import session from "express-session";

import albumsController from "./controllers/albums-controller.js";
import tracksController from "./controllers/tracks-controller.js";
import publishersController from "./controllers/publishers-controller.js";
import viewersController from "./controllers/viewers-controller.js";
import adminsController from "./controllers/admins-controller.js";

import baseUsersController from "./controllers/users-controller.js";
import commentsController from "./controllers/comments-controller.js";
import likeTracksController from "./controllers/likeTracks-controller.js";
import collectAlbumsController from "./controllers/collectAlbums-controller.js";
import collectionsController from "./controllers/collections-controller.js";
import followsController from "./controllers/follows-controller.js";

// hardcode in server for convenience
// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/musicApp'
const CONNECTION_STRING = 'mongodb+srv://zhouliupku:5610final@cluster0.fkuszns.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(
    session({
        secret: "any string", resave: false, saveUninitialized: true,
    })
);

app.use( cors({
    credentials: true,
    origin: "http://localhost:3000", })
);

app.use(express.json());


albumsController(app);
tracksController(app);
publishersController(app);
viewersController(app);
adminsController(app);
collectionsController(app);
followsController(app);

baseUsersController(app);
commentsController(app);
likeTracksController(app);
collectAlbumsController(app);



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});