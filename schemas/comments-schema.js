import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    commenter: {type: mongoose.Schema.Types.ObjectId, ref: "viewers", required: true},
    content: { type: String, required: true },
    albumId: { type: String, required: true },
    albumName: String,
    isLocal: Boolean,
    createdAt: { type: Date, default: Date.now },
}, {collection: 'comments'})

export default commentsSchema;