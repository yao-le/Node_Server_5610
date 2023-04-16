import tracksModel from "../models/tracks-model.js";

export const createTrack = (track) => tracksModel.create(track);
export const findAllTracks = () => tracksModel.find();
export const findAllTracksByAlbum = (albumId) => tracksModel.find({album: albumId})
export const updateTrackById = (trackId, track) => tracksModel.updateOne({_id: trackId}, track)
export const deleteTrackById = (trackId) => tracksModel.deleteOne({_id: trackId})


