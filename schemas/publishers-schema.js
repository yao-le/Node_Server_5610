import mongoose from "mongoose";

const publishersSchema = new mongoose.Schema({
    selfIntro: String,
    publishedTracks: [{type: mongoose.Schema.Types.ObjectId, ref: "tracks"}],
}, {collection: 'publishers'})

export default publishersSchema;