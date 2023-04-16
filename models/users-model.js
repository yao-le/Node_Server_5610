import mongoose from "mongoose";
import baseUsersSchema from "../schemas/baseUsers-schema.js";
import viewersSchema from "../schemas/viewers-schema.js";
import publishersSchema from "../schemas/publishers-schema.js";
import adminsSchema from "../schemas/admins-schema.js";


export const usersModel = mongoose.model('baseUserModel', baseUsersSchema);

export const viewersModel = usersModel.discriminator('viewer', viewersSchema);
export const publishersModel = usersModel.discriminator('publisher', publishersSchema);
export const adminsModel = usersModel.discriminator('admin', adminsSchema);
