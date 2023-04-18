import mongoose from "mongoose";

const likeTracksSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "viewers", required: true},
    trackId: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    isLocal: Boolean,
}, {collection: 'likeTracksRelations'})


export default likeTracksSchema;