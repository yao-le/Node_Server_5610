import adminsModel from "../models/admins-model.js";

export const createAdmin = (admin) => adminsModel.create(admin);
export const updateAdmin = (aid, admin) => adminsModel.updateOne({_id: aid}, admin);
export const deleteAdmin = (aid) => adminsModel.deleteOne({_id: aid});
export const findAdminByName = (name) => adminsModel.find({name});
export const findAdminByCredentials = (name, password) => adminsModel.find({name, password});
export const findAllAdmins = () => adminsModel.find();