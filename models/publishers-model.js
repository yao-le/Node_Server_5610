import mongoose from "mongoose";
import publishersSchema from "../schemas/publishers-schema.js";

const publishersModel = mongoose.model('PublisherModel', publishersSchema)
export default publishersModel;