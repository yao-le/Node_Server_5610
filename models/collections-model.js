import mongoose from "mongoose";
import collectionsSchema from "../schemas/collections-schema.js";

const collectionsModel = mongoose.model('CollectionModel', collectionsSchema)
export default collectionsModel