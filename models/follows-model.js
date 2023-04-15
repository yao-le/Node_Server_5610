import mongoose from "mongoose";
import followsSchema from "../schemas/follows-schema.js";

const followsModel = mongoose.model('FollowModel', followsSchema)
export default followsModel;