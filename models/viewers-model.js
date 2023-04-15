import mongoose from "mongoose";
import viewersSchema from "../schemas/viewers-schema.js";

const viewersModel = mongoose.model('ViewerModel', viewersSchema)
export default viewersModel;