import * as albumsDao from "../dao/albums-dao.js"

const createAlbum = async (req, res) => {
    const newAlbum = req.body;
    // TODO: how to get publisher id by request
    // here I use params, supposing that the path for the publisher has its id
    const currentPublisher = req.params.pid
    newAlbum.publisher = currentPublisher;
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
    const status = await albumsDao.updateOneAlbumByAlbumId(aid);
    res.send(status)
}

export default (app) => {
    app.post('/api/albums/:pid', createAlbum)
    app.get('/api/albums', findAllAlbums)
    app.get('/api/albums/:pid', findAlbumsByPublisher)
    app.delete('/api/albums/:aid', deleteAlbumById)
    app.put('/api/albums/:aid', updateAlbumById)
}