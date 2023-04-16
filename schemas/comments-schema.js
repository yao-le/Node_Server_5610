import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    commenter: {type: mongoose.Schema.Types.ObjectId, ref: "viewers", required: true},
    content: { type: String, required: true },
    albumId: { type: String, required: true }, // spotify album id, not mongoDB id
    albumName: String,
    createdAt: { type: Date, default: Date.now },
}, {collection: 'comments'})

export default commentsSchema;