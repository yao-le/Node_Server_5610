import followsModel from "../models/follows-model.js";

export const createFollowRelation = (follow) => followsModel.create(follow)
export const deleteFollowRelation = (followId) => followsModel.deleteOne({_id: followId})

export const getAllFollowersByPublisher = (publisherId) => followsModel.find({publisher: publisherId})
export const getAllFollowingsByViewer = (viewerId) => followsModel.find({viewer: viewerId})
