import mongoose from "mongoose";

const tracksSchema = new mongoose.Schema({
    name: String,
    album: {type: mongoose.Schema.Types.ObjectId, ref: "albums"},
    likes: Number,
    liked: Boolean
}, {collection: 'tracks'})

export default tracksSchema;