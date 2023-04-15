import mongoose from "mongoose";

const collectionsSchema = new mongoose.Schema({
    name: String,
    viewer: {type: mongoose.Schema.Types.ObjectId, ref: "viewers"},
    track: {type: mongoose.Schema.Types.ObjectId, ref: "tracks"}
}, {collection: 'collections'})

export default collectionsSchema;