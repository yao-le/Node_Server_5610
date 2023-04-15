import mongoose from "mongoose";

const albumsSchema = new mongoose.Schema({
    name: String,
    publisher: {type: mongoose.Schema.Types.ObjectId, ref: "publishers"},
    coverPic: String,
    description: String
}, {collection: 'albums'});

export default albumsSchema;