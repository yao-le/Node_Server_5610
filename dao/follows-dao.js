import followsModel from "../models/follows-model.js";

export const createFollowRelation = (follow) => followsModel.create(follow)
export const deleteFollowRelation = (viewer, publisher) => followsModel.deleteOne({viewer: viewer, publisher: publisher})

export const getAllFollowersByPublisher = async (publisherId) => {
    return await followsModel.find({publisher: publisherId})
                .populate('viewer', "name")
                .exec();
}

export const getAllFollowingsByViewer = async (viewerId) => {
    return await followsModel.find({viewer: viewerId})
                .populate('publisher', "name")
                .exec();
}
