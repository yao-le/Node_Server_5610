import {adminsModel} from "../models/users-model.js";

export const createAdmin = (admin) => adminsModel.create(admin);
export const updateAdmin = (aid, admin) => adminsModel.updateOne({_id: aid}, admin);
export const deleteAdmin = (aid) => adminsModel.deleteOne({_id: aid});
export const findAdminByName = (name) => adminsModel.findOne({name});
// export const findAdminByCredentials = (name, password) => adminsModel.findOne({name, password});
export const findAllAdmins = () => adminsModel.find();