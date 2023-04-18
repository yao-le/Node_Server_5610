import * as albumsDao from "../dao/albums-dao.js"

const createAlbum = async (req, res) => {
    console.log(req.body);
    const newAlbum = await albumsDao.createAlbum(req.body);
    res.json(newAlbum);
}

const findAlbumsByPublisher = async (req, res) => {
    const pid = req.params.pid
    const albums = await albumsDao.findAlbumsByPublisherId(pid);
    res.json(albums)
}

const getAlbumById = async (req, res) => {
    const aid = req.params.aid;
    const album = await albumsDao.findOneAlbumById(aid);
    res.json(album);
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
    const status = await albumsDao.updateOneAlbumByAlbumId(aid, req.body);
    res.send(status)
}

export default (app) => {
    app.post('/api/albums', createAlbum)
    app.get('/api/albums', findAllAlbums)
    app.get('/api/albums/:aid', getAlbumById);
    app.get('/api/albums/publisher/:pid', findAlbumsByPublisher)
    app.delete('/api/albums/:aid', deleteAlbumById)
    app.put('/api/albums/:aid', updateAlbumById)
}