import * as collectionsDao from "../dao/collections-dao.js"

const createCollection = async (req, res) => {
    const collectionName = req.body
    const viewer = req.session['currentUser']
    const trackId = req.params.tid
    const newCollection = {name: collectionName, viewer: viewer._id, track: trackId}
    const insertedCollection = collectionsDao.createCollection(newCollection)
    res.json(insertedCollection)
}

const deleteCollectionById = async (req, res) => {
    const collectionId = req.params.cid;
    const status = collectionsDao.deleteCollectionById(collectionId)
    res.send(status)
}

const updateCollectionById = async (req, res) => {
    const collectionId = req.params.cid;
    const newCollection = req.body;
    const status = collectionsDao.updateCollectionById(collectionId, newCollection)
    res.send(status)
}

const getAllCollectionsByViewer = async (req, res) => {
    const viewerId = req.params.vid;
    const collections = collectionsDao.getAllCollectionsByViewer(viewerId)
    res.json(collections)
}

export default (app) => {

    app.post('/api/collections/:tid', createCollection)
    app.delete('/api/collections/:cid', deleteCollectionById)
    app.put('/api/collections/:cid', updateCollectionById)
    app.get('/api/collections/:vid', getAllCollectionsByViewer)


}