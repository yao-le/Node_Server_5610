import mongoose from "mongoose";

const viewersSchema = new mongoose.Schema({
    favoriteGenres: {type: [String], default: ["jazz", "country", "classical", "rock", "folk"]},
}, {collection: 'viewers'})

export default viewersSchema;