import mongoose from "mongoose";

const tracksSchema = new mongoose.Schema({
    trackName: String,
    album: {type: mongoose.Schema.Types.ObjectId, ref: "albums"},
    artistName: String,
    duration: String,
    likes: { type: Number, default: 0 },
}, {collection: 'tracks'})

export default tracksSchema;