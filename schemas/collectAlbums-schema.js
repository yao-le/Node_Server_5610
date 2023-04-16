import mongoose from "mongoose";

const collectAlbumsSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "viewers", required: true},
    spotifyAlbumId: {type: String, required: true}, // spotify album id, not local mongoDB id
    createdAt: { type: Date, default: Date.now },
}, {collection: 'collectAlbumsRelations'})


export default collectAlbumsSchema;