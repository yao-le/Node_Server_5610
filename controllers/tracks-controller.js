import * as tracksDao from "../dao/tracks-dao.js"

const createTrack = async (req, res) => {
    // TODO: How to get album id
    const newTrack = req.body;
    newTrack.likes = 0;
    newTrack.liked = false;
    const insertedTrack = await tracksDao.createTrack(newTrack);
    res.json(insertedTrack)
}

export default (app) => {
    app.post('api/tracks', createTrack)
}