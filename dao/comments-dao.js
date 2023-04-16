import commentsModel from "../models/comments-model.js";


export const findAllComments = async () => {
    return commentsModel.find();
};

// use spotify id to find the album
export const findCommentsByAlbumId = async (albumId) => {
    return commentsModel.find({albumId: albumId}).sort({createdAt: -1});
};

export const findCommentsByUserId = async (userId) => {
    return commentsModel.find({commenter: userId});
};

export const createComment = async (comment) => {
    return commentsModel.create(comment);
};

export const deleteComment = async (commentId) => {
    return commentsModel.deleteOne({_id: commentId});
};

export const updateComment = async (commentId, comment) => {
    return commentsModel.updateOne({_id: commentId}, {$set: comment});
};