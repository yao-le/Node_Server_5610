import mongoose from "mongoose";
import collectAlbumsSchema from "../schemas/collectAlbums-schema.js";

const collectAlbumsModel = mongoose.model('collectAlbumsModel', collectAlbumsSchema)

export default collectAlbumsModel;