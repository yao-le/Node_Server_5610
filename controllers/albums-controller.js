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

const findAlbums = async (req, res) => {
    const albums = await albumsDao.findAlbums();
    res.json(albums)
}

export default (app) => {
    // TODO: should we encode publisher id into the URL?
    app.post('/api/albums', createAlbum)
    app.get('/api/albums', findAlbums)
}