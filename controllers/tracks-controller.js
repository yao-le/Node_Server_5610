import * as tracksDao from "../dao/tracks-dao.js"

const createTrack = async (req, res) => {
    const newTrack = await tracksDao.createTrack(req.body);
    res.json(newTrack);
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
    const trackId = req.params.tid;
    const updatedTrack = req.body
    const status = await tracksDao.updateTrackById(trackId, updatedTrack)
    res.json(status)
}

const deleteTrackById = async (req, res) => {
    const trackId = req.params.tid;
    const status = await tracksDao.deleteTrackById(trackId)
    res.json(status);
}

const getTrackById = async (req, res) => {
    const trackId = req.params.tid;
    const track = await tracksDao.findTrackById(trackId);
    res.json(track);
}

export default (app) => {
    app.post('/api/tracks', createTrack)
    app.get('/api/tracks', findAllTracks)
    app.get('/api/tracks/album/:aid', findTracksByAlbum)
    app.put('/api/tracks/:tid', updateTrackById)
    app.delete('/api/tracks/:tid', deleteTrackById)
    app.get('/api/tracks/:tid', getTrackById);
}