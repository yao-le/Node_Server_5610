import * as collectAlbumsDao from "../dao/collectAlbums-dao.js";


const findCollectedAlbumsByUserId = async (req, res) => {
    const results = await collectAlbumsDao.findCollectedByUserId(req.params.userId);
    res.json(results);
};

// use spotify id -> albumId
const findCollectAlbum = async (req, res) => {
    const results = await collectAlbumsDao.findCollectAlbum(req.params.userId, req.params.albumId);
    res.json(results);
};

// create new collect relation
const createCollect = async (req, res) => {
    const newRelation = await collectAlbumsDao.createCollectAlbum(req.body);
    res.json(newRelation);
};

// delete collect relation
const deleteCollect = async (req, res) => {
    const status = await collectAlbumsDao.deleteCollectAlbum(req.params.userId, req.params.albumId);
    res.send(status);
};


export default (app) => {
    app.get("/api/collects/albums/:userId/:albumId", findCollectAlbum);
    app.get("/api/collects/albums/:userId", findCollectedAlbumsByUserId);
    app.post("/api/collects/albums", createCollect);
    app.delete("/api/collects/albums/:userId/:albumId", deleteCollect);
}