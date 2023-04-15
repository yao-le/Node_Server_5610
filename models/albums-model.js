import mongoose from "mongoose";
import albumsSchema from "../schemas/albums-schema.js";
const albumsModel = mongoose.model('AlbumModel', albumsSchema)
export default albumsModel;