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
const getAllViewersByPublisher = async (req, res) => {
    const publisherId = req.params.pid;
    const followers = await followsDao.getAllFollowersByPublisher(publisherId)
    res.json(followers)

}

// delete all follow relation related the given user
const deleteAllFollowRelationByUserId = async (req, res) => {
    const userId = req.params.uid;
    const status = await followsDao.deleteFollowRelationByUserId(userId)
    res.json(status)
}

// find out if the viewer follows the publisher
const findFollowRelation = async (req, res) => {
    const viewerId = req.params.vid;
    const publisherId = req.params.pid;
    const followRelation = await followsDao.findFollowRelation(viewerId, publisherId)
    res.json(followRelation);
}

const followUser = async (req, res) => {
    const viewerId = req.params.vid;
    const publisherId = req.params.pid;
    const newFollow = await followsDao.followUser(viewerId, publisherId)
    res.json(newFollow)
}

const unfollowUser = async (req, res) => {
    const viewerId = req.params.vid;
    const publisherId = req.params.pid;
    const status = await followsDao.unfollowUser(viewerId, publisherId)
    res.json(status)
}

export default (app) => {
    app.post('/api/follows/:pid', viewerFollowPublisher)
    app.get('/api/followings/:vid', getAllPublishersOfViewer)
    app.get('/api/followers/:pid', getAllViewersByPublisher)

    app.delete('/api/follow-relation/:uid', deleteAllFollowRelationByUserId)
    app.get('/api/follow-relation/:vid/:pid', findFollowRelation)
    app.post('/api/follows/:vid/:pid', followUser)
    app.delete('/api/follows/:vid/:pid', unfollowUser)
}