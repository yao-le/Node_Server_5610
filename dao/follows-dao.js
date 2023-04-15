import followsModel from "../models/follows-model.js";

export const createFollowRelation = (follow) => followsModel.create(follow)
export const deleteFollowRelation = (followId) => followsModel.deleteOne({_id: followId})

// TODO: how to get all followings and all followers