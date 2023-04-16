import mongoose from "mongoose";
import likeTracksSchema from "../schemas/likeTracks-schema.js";

const likeTracksModel = mongoose.model('CollectionModel', likeTracksSchema)

export default likeTracksModel;