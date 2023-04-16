import collectAlbumsModel from "../models/collectAlbums-model.js";


// sort by createdAt in descending order
export const findCollectedByUserId = async (userId) =>
    collectAlbumsModel.find({userId: userId}).sort({createdAt: -1});

// find out if the user has collected the album
// if the user has collected the album, return the object
// have used the spotify album id to specify the album!!!
export const findCollectAlbum = async(userId, albumId) =>
    collectAlbumsModel.findOne({userId: userId, spotifyAlbumId: albumId});


export const createCollectAlbum = async (collectRelation) =>
    collectAlbumsModel.create(collectRelation);


export const deleteCollectAlbum = async (userId, albumId) => {
    return collectAlbumsModel.deleteOne({userId: userId, spotifyAlbumId: albumId});
};
