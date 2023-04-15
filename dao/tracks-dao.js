import tracksModel from "../models/tracks-model.js";

export const createTrack = (track) => tracksModel.create(track);
export const findAllTracks = () => tracksModel.find();
export const findAllTracksByAlbum = (albumId) => tracksModel.find({album: albumId})
export const updateAlbumById = (albumId, album) => tracksModel.updateOne({_id: albumId}, album)
export const deleteAlbumById = (albumId) => tracksModel.deleteOne({_id: albumId})


