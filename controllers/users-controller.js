import * as usersDao from "../dao/users-dao.js";


const login = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const user = await usersDao.findUserByCredentials(name, password);
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


const findUserById = async (req, res) => {
    const uid = req.params.userId;
    const user = await usersDao.findUserById(uid);
    if (user) {
        res.json(user);
    } else {
        res.json(404);
    }
}

// const deleteUser = async (req, res) => {
//     const uid = req.params.userId;
//     const status = await usersDao.deleteUser(uid);
//     res.send(status)
// }


export default (app) => {
    app.get("/api/users/:userId", findUserById)
    app.post("/api/users/login", login)
    app.post("/api/users/logout", logout)
    // app.delete("/api/users/:userId", deleteUser)
}