import albumsModel from "../models/albums-model.js";

export const createAlbum = (album) => albumsModel.create(album);
export const findAlbums = () => albumsModel.find();
