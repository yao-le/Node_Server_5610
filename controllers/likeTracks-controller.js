import * as likeTracksDao from "../dao/likeTracks-dao.js";


const findLikedTracksByUserId = async (req, res) => {
    const results = await likeTracksDao.findLikedByUserId(req.params.userId);
    res.json(results);
};

// use spotify id -> trackId
const findLikeTrack = async (req, res) => {
    const results = await likeTracksDao.findLikeTrack(req.params.userId, req.params.trackId);
    res.json(results);
};


const createLike = async (req, res) => {
    const newRelation = await likeTracksDao.createLikeTrack(req.body);
    res.json(newRelation);
};


const deleteLike = async (req, res) => {
    const status = await likeTracksDao.deleteLikeTrack(req.params.userId, req.params.trackId);
    res.send(status);
};


export default (app) => {
    app.get("/api/likes/tracks/:userId/:trackId", findLikeTrack);
    app.get("/api/likes/tracks/:userId", findLikedTracksByUserId);
    app.post("/api/likes/tracks", createLike);
    app.delete("/api/likes/tracks/:userId/:trackId", deleteLike);
}