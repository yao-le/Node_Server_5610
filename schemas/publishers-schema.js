import mongoose from "mongoose";

const publishersSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    portrait: String,
    selfIntro: String
}, {collection: 'publishers'})

export default publishersSchema;