import * as tracksDao from "../dao/tracks-dao.js"

const createTrack = async (req, res) => {
    // TODO: How to get album id
    const newTrack = req.body;
    newTrack.album = req.params.aid;
    newTrack.likes = 0;
    newTrack.liked = false;
    const insertedTrack = await tracksDao.createTrack(newTrack);
    res.json(insertedTrack)
}

const findAllTracks = async (req, res) => {
    const tracks = await tracksDao.findAllTracks();
    res.json(tracks)
}

const findTracksByAlbum = async (req, res) => {
    const albumId = req.params.aid;
    const tracks = await tracksDao.findAllTracksByAlbum(albumId);
    res.json(tracks)

}

const updateTrackById = async (req, res) => {
    // TODO: check whether current user is the publisher of the track
    const trackId = req.params.tid;
    const updatedTrack = req.body
    const status = await tracksDao.updateTrackById(trackId, updatedTrack)
    res.json(status)
}

const deleteTrackById = async (req, res) => {
    const trackId = req.params.tid;
    const status = await tracksDao.deleteTrackById(trackId)
}

export default (app) => {
    app.post('/api/tracks/:aid', createTrack)
    app.get('/api/tracks', findAllTracks)
    app.get('/api/tracks/:aid', findTracksByAlbum)
    app.put('/api/tracks/:tid', updateTrackById)
    app.delete('/api/tracks/:tid', deleteTrackById)

}