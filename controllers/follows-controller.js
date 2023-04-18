import * as followsDao from "../dao/follows-dao.js"

const viewerFollowPublisher = async (req, res) => {
    const viewer = req.session['currentUser']
    const publisherId = req.params.pid;
    const followRelation = {viewer: viewer._id, publisher: publisherId}
    const newFollow = await followsDao.createFollowRelation(followRelation)
    res.json(newFollow)
}

// get all its followings
const getAllPublishersOfViewer = async (req, res) => {
    const viewerId = req.params.vid;
    const followings = await followsDao.getAllFollowingsByViewer(viewerId)
    res.json(followings)

}

// get all its followers
const getAllViewersOfPublisher = async (req, res) => {
    const publisherId = req.params.pid;
    const followers = await followsDao.getAllFollowersByPublisher(publisherId)
    res.json(followers)
}

// only viewer can unfollow a publisher
const viewerUnFollowPublisher = async (req, res) => {
    const viewer = req.session['currentUser']
    const publisherId = req.params.pid;
    const status = await followsDao.deleteFollowRelation(viewer._id, publisherId)
    res.json(status)
}

export default (app) => {
    app.post('/api/follows/:pid', viewerFollowPublisher)
    app.get('/api/followings/:vid', getAllPublishersOfViewer)
    app.get('/api/followers/:pid', getAllViewersOfPublisher)
    app.get('/api/unfollow/:pid', viewerUnFollowPublisher)
}