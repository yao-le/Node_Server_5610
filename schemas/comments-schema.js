import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    viewerName: String,
    content: String,
    time: Date,
    album: {type: mongoose.Schema.Types.ObjectId, ref: "albums"}
}, {collection: 'comments'})

export default commentsSchema;