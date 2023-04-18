import mongoose from "mongoose";

const albumsSchema = new mongoose.Schema({
    albumName: String,
    publisher: {type: mongoose.Schema.Types.ObjectId, ref: "publishers"},
    publisherName: String,
    coverPic: String,
    description: String,
    createdAt: {type: Date, default: Date.now},
    totalTracks: Number,
}, {collection: 'albums'});

export default albumsSchema;