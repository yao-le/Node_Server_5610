import * as adminsDao from "../dao/admins-dao.js"

const register = async (req, res) => {
    const name = req.body.name;
    // check already registered
    const admin = await adminsDao.findAdminByName(name);
    if (admin) {
        res.sendStatus(409);
        return;å
    }
    const newAdmin = await adminsDao.createAdmin(req.body);
    req.session["currentUser"] = newAdmin;
    res.json(newAdmin)
}

const login = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const user = await adminsDao.findAdminByCredentials(name, password);
    if (user) {
        req.session["currentUser"] = user;
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

// To update one's profile
const updateAdmin = async (req, res) => {
    const currentAdmin = req.session["currentUser"];
    if(!currentAdmin) {
        res.sendStatus(403);
        return;
    }
    req.session["currentUser"] = req.body;
    const aid = req.params.adminId;
    const status = await adminsDao.updateAdmin(aid, req.body)
    res.send(status)
}

// delete by admin itself
const deleteAdmin = async (req, res) => {
    const aid = req.params.adminId;
    const status = await adminsDao.deleteAdmin(aid);
    res.send(status)
}


const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
};

const findAllAdmins = async (req, res) => {
    const admins = await adminsDao.findAllAdmins();
    res.json(admins)
}

const getAdminProfile = async (req, res) => {
    const admin = req.session["currentUser"];
    if(!admin) {
        res.sendStatus(403);
        return;
    }
    res.json(admin);
}

export default (app) => {
    app.post("/api/admins/register", register)
    app.post("/api/admins/login", login)
    app.post("/api/admins/logout", logout)
    app.put("/api/admins/:adminId", updateAdmin)
    app.delete("/api/admins/:adminId", deleteAdmin)
    app.get("/api/admins", findAllAdmins)
    app.get("/api/admins/profile", getAdminProfile)
}