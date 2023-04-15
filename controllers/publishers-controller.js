import * as publishersDao from "../dao/publishers-dao.js"

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
    const pid = req.params.publisherId;
    const status = await publishersDao.updatePublisher(pid, req.body)
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

export default (app) => {
    app.post("/api/publishers/register", register)
    app.post("/api/publishers/login", login)
    app.post("/api/publishers/logout", logout)
    app.put("/api/publishers/:publisherId", updatePublisher)
    app.delete("/api/publishers/:publisherId", deletePublisher)
    app.get("/api/publishers", findAllPublishers)
}