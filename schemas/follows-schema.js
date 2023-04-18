import mongoose from "mongoose";

const followsSchema = new mongoose.Schema({
    viewer: {type: mongoose.Schema.Types.ObjectId, ref: "ViewerModel"},
    publisher: {type: mongoose.Schema.Types.ObjectId, ref: "PublisherModel"}
}, {collection: 'follows'})

export default followsSchema;