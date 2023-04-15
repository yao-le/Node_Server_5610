import mongoose from "mongoose";

const followsSchema = new mongoose.Schema({
    viewer: {type: mongoose.Schema.Types.ObjectId, ref: "viewers"},
    publisher: {type: mongoose.Schema.Types.ObjectId, ref: "publishers"}
}, {collection: 'follows'})

export default followsSchema;