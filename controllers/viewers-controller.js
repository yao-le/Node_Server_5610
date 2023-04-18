import * as viewersDao from "../dao/viewers-dao.js"


const register = async (req, res) => {
    const name = req.body.name;
    // check already registered
    const viewer = await viewersDao.findViewerByName(name);
    if (viewer) {
        res.sendStatus(409);
        return;
    }
    // after registration, the current user is the new viewer
    const newViewer = await viewersDao.createViewer(req.body);
    req.session["currentUser"] = newViewer;
    res.json(newViewer)
}

const login = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const user = await viewersDao.findViewerByCredentials(name, password);
    if (user) {
        req.session["currentUser"] = user;
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

// To update one's profile
const updateViewer = async (req, res) => {
    const currentViewer = req.session["currentUser"];
    if (!currentViewer) {
        res.sendStatus(403);
        return;
    }
    const vid = req.params.viewerId;
    const status = await viewersDao.updateViewer(vid, req.body)
    req.session["currentUser"] = {...req.session["currentUser"], ...req.body}
    res.send(status)
}

// delete viewer, can be used by admin
const deleteViewer = async (req, res) => {
    const vid = req.params.viewerId;
    const status = await viewersDao.deleteViewer(vid);
    res.send(status)
}

const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
};

const findAllViewers = async (req, res) => {
    const viewers = await viewersDao.findAllViewers();
    res.json(viewers)
}

const getViewerProfile = async (req, res) => {
    const viewer = req.session["currentUser"];
    if(!viewer) {
        res.sendStatus(403);
        return;
    }
    res.json(viewer)
}

export default (app) => {
    app.post("/api/viewers/register", register)
    app.post("/api/viewers/login", login)
    app.post("/api/viewers/logout", logout)
    app.put("/api/viewers/:viewerId", updateViewer)
    app.delete("/api/viewers/:viewerId", deleteViewer)
    app.get("/api/viewers", findAllViewers)
    app.get("/api/viewers/profile", getViewerProfile)
}