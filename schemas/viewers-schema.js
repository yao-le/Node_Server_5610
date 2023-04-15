import mongoose from "mongoose";

const viewersSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    portrait: String
}, {collection: 'viewers'})

export default viewersSchema;