import followsModel from "../models/follows-model.js";

export const createFollowRelation = (follow) => followsModel.create(follow)
export const deleteFollowRelation = (followId) => followsModel.deleteOne({_id: followId})

export const getAllFollowersByPublisher = (publisherId) => followsModel.find({publisher: publisherId})
export const getAllFollowingsByViewer = (viewerId) => followsModel.find({viewer: viewerId})



export const deleteFollowRelationByUserId = (userId) => {
    return followsModel.deleteMany({$or: [{viewer: userId}, {publisher: userId}]});
}

export const unfollowUser = (viewerId, publisherId) => {
    return followsModel.deleteOne({viewer: viewerId, publisher: publisherId})
}

export const followUser = (viewerId, publisherId) => {
    const followRelation = {viewer: viewerId, publisher: publisherId}
    return followsModel.create(followRelation)
}

export const findFollowRelation = (viewerId, publisherId) => {
    return followsModel.findOne({viewer: viewerId, publisher: publisherId})
}