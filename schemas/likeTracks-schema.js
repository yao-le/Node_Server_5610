import mongoose from "mongoose";

const likeTracksSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "viewers", required: true},
    spotifyTrackId: {type: String, required: true}, // spotify track id, not mongoDB id
    createdAt: { type: Date, default: Date.now },
}, {collection: 'likeTracksRelations'})


export default likeTracksSchema;