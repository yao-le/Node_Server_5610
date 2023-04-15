import * as albumsDao from "../dao/albums-dao.js"

const createAlbum = async (req, res) => {
    const newAlbum = req.body;
    // TODO: how to enable uploading pictures and store in database
    // Here I just add a default pic for album cover
    // TODO: how to get publisher id by request
    newAlbum.coverPic = "../pics/albumDemo.jpg"
    const insertedAlbum = await albumsDao.createAlbum(newAlbum);
    res.json(insertedAlbum)
}

const findAlbums = async (req, res) => {
    const albums = await albumsDao.findAlbums();
    res.json(albums)
}

export default (app) => {
    app.post('/api/albums', createAlbum)
    app.get('/api/albums', findAlbums)
}