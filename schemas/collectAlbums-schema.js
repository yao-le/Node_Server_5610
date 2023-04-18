import mongoose from "mongoose";

const collectAlbumsSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "viewers", required: true},
    albumId: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    isLocal: Boolean,
}, {collection: 'collectAlbumsRelations'})


export default collectAlbumsSchema;