import likeTracksModel from "../models/likeTracks-model.js";


// sort by createdAt in descending order
export const findLikedByUserId = async (userId) =>
    likeTracksModel.find({userId: userId}).sort({createdAt: -1});

// find out if the user has liked the track
// if the user has liked the track, return the likeTrack object
// use the spotify track id to specify the track
export const findLikeTrack = async(userId, trackId) =>
    likeTracksModel.findOne({userId: userId, trackId: trackId});

export const createLikeTrack= async (likeRelation) => likeTracksModel.create(likeRelation);

export const deleteLikeTrack = async (userId, trackId) => {
    return likeTracksModel.deleteOne({userId: userId, trackId: trackId});
};
