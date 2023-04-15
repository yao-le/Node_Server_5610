import mongoose from "mongoose";
import tracksSchema from "../schemas/tracks-schema.js";
const tracksModel = mongoose.model('TrackModel', tracksSchema);
export default tracksModel;