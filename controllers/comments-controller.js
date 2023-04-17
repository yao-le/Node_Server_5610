import * as commentsDao from '../dao/comments-dao.js';


const findAllComments = async (req, res) => {
    const comments = await commentsDao.findAllComments();
    res.json(comments);
};

// use spotify id
const findCommentsByAlbumId = async (req, res) => {
    const comments = await commentsDao.findCommentsByAlbumId(req.params.albumId);
    res.json(comments);
};

// current user
// const findCommentsByUserId = async (req, res) => {
//     const currentUser = req.session["currentUser"];
//     const comments  = await commentsDao.findCommentsByUserId(currentUser._id);
//     res.send(comments);
// };

const createComment = async (req, res) => {
    // const currentUser = req.session["currentUser"];
    // if (!currentUser) {
    //     res.sendStatus(403);
    //     return;
    // }
    // const comment = { ...req.body, commenter: currentUser._id };
    const newComment= await commentsDao.createComment(req.body);
    res.json(newComment);
};

const updateComment = async (req, res) => {
    const commentId = req.params.commentId;
    const status = await commentsDao.updateComment(commentId, req.body);
    res.send(status);
};

const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    const status = await commentsDao.deleteComment(commentId);
    res.send(status);
};

const deleteCommentsByUserId = async (req, res) => {
    const userId = req.params.userId;
    const status = await commentsDao.deleteCommentsByUserId(userId);
    res.send(status);
}

export default (app) => {
    app.get("/api/comments", findAllComments);
    app.get("/api/comments/album/:albumId", findCommentsByAlbumId);
    // app.get("/api/comments/user/", findCommentsByUserId);
    app.post("/api/comments", createComment);
    app.put("/api/comments/:commentId", updateComment);
    app.delete("/api/comments/:commentId", deleteComment);
    app.delete("/api/comments/user/:userId", deleteCommentsByUserId);
}