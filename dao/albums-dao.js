import albumsModel from "../models/albums-model.js";

export const createAlbum = (album) => albumsModel.create(album);
export const findAllAlbums = () => albumsModel.find();
export const findAlbumsByPublisherId = (publisherId) => albumsModel.find({publisher: publisherId});
export const findOneAlbumById = (albumId) => albumsModel.findById(albumId);
export const deleteOneAlbumOfPublisher =
    (albumName, publisherId) => albumsModel.deleteOne({publisher: publisherId, name: albumName})
export const deleteOneAlbumByAlbumId = (albumId) => albumsModel.deleteOne({_id: albumId})
export const updateOneAlbumOfPublisher =
    (albumName, publisherId, album) => albumsModel.updateOne({publisher: publisherId, name: albumName}, {$set: album})
export const updateOneAlbumByAlbumId = (albumId, album) => albumsModel.updateOne({_id: albumId}, {$set: album})

