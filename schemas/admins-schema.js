import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
}, {collection: 'admins'})

export default adminsSchema;