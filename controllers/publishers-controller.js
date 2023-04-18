import * as publishersDao from "../dao/publishers-dao.js"
import fs from "fs"


const register = async (req, res) => {
    const name = req.body.name;
    // check already registered
    const publisher = await publishersDao.findPublisherByName(name);
    if (publisher) {
        res.sendStatus(409);
        return;
    }
    const newPublisher = await publishersDao.createPublisher(req.body);
    req.session["currentUser"] = newPublisher;
    res.json(newPublisher)
}

const login = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const user = await publishersDao.findPublisherByCredentials(name, password);
    if (user) {
        req.session["currentUser"] = user;
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
};

// To update one's profile
const updatePublisher = async (req, res) => {
    if(!req.session["currentUser"]) {
        res.sendStatus(403);
        return;
    }
    const pid = req.params.publisherId;
    const status = await publishersDao.updatePublisher(pid, req.body)
    req.session["currentUser"] = {...req.session["currentUser"], ...req.body}
    res.send(status)
}

// delete publisher, can be used by admin
const deletePublisher = async (req, res) => {
    const pid = req.params.publisherId;
    const status = await publishersDao.deletePublisher(pid);
    res.send(status)
}

const findAllPublishers = async (req, res) => {
    const publishers = await publishersDao.findAllPublishers();
    res.json(publishers)
}

const getPublisherProfile = async (req, res) => {
    const publisher = req.session["currentUser"];
    if(!publisher) {
        res.sendStatus(403);
        return;
    }
    res.json(publisher)
}

// upload profile image
const uploadProfileImg = async (req, res) => {
    const publisher = req.session["currentUser"];
    if(!publisher) {
        res.sendStatus(403);
        return;
    }
    const pid = publisher._id;
    const newPublisher = {...publisher, portrait: req.file.filename};
    const url = await publishersDao.updatePublisher(pid, newPublisher);
    req.session["currentUser"] = newPublisher;
    res.sendStatus(200)
}

// get profile image
const getProfileImg = async (req, res) => {
    const publisher = req.session["currentUser"];
    if(!publisher) {
        res.sendStatus(403);
        return;
    }
    const img = publisher.portrait;
    const readStream = fs.createReadStream(`./public/images/${img}`)
    readStream.pipe(res)
}

export default (app, upload) => {
    app.post("/api/publishers/register", register)
    app.post("/api/publishers/login", login)
    app.post("/api/publishers/logout", logout)
    app.put("/api/publishers/:publisherId", updatePublisher)
    app.delete("/api/publishers/:publisherId", deletePublisher)
    app.get("/api/publishers", findAllPublishers)
    app.get("/api/publishers/profile", getPublisherProfile)
    app.post("/api/publishers/profile/img", upload.single("portrait"), uploadProfileImg)
    app.get("/api/publishers/profile/img", getProfileImg)
}