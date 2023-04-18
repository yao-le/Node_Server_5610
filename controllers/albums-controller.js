import * as albumsDao from "../dao/albums-dao.js"
import {findOneAlbumById} from "../dao/albums-dao.js";

const createAlbum = async (req, res) => {
    const newAlbum = req.body;
    const currentPublisher = req.session['currentUser'];
    if (!currentPublisher) {
        res.sendStatus(403);
        return;
    }

    newAlbum.publisher = currentPublisher._id;
    // TODO: how to enable uploading pictures and store in database
    // Here I just add a default pic for album cover
    newAlbum.coverPic = "../pics/albumDemo.jpg"
    const insertedAlbum = await albumsDao.createAlbum(newAlbum);
    res.json(insertedAlbum)
}

const findAlbumsByPublisher = async (req, res) => {
    const pid = req.params.pid
    const albums = await albumsDao.findAlbumsByPublisherId(pid);
    res.json(albums)
}

const findAllAlbums = async (req, res) => {
    const albums = await albumsDao.findAllAlbums();
    res.json(albums)
}

const deleteAlbumById = async (req, res) => {
    const aid = req.params.aid;
    const status = await albumsDao.deleteOneAlbumByAlbumId(aid);
    res.send(status)
}

const updateAlbumById = async (req, res) => {
    const aid = req.params.aid;
    const newAlbum = req.body;
    const status = await albumsDao.updateOneAlbumByAlbumId(aid, newAlbum);
    res.send(status)
}

const getAlbumById = async (req, res) => {
    const aid = req.params.aid;
    const album = await findOneAlbumById(aid);
    res.json(album)
}

export default (app) => {
    app.post('/api/albums', createAlbum)
    app.get('/api/albums', findAllAlbums)
    app.get('/api/:pid/albums', findAlbumsByPublisher)
    app.delete('/api/albums/:aid', deleteAlbumById)
    app.put('/api/albums/:aid', updateAlbumById)
    app.get('/api/albums/:aid', getAlbumById)
}