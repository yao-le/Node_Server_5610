import {usersModel} from "../models/users-model.js";


export const findUserById = (uid) => usersModel.findById(uid);
export const findUserByCredentials = (name, password) => usersModel.findOne({name, password});
export const findAllUsers = () => usersModel.find().sort({createdAt: -1});
export const deleteUser= (uid) => usersModel.deleteOne({_id: uid});