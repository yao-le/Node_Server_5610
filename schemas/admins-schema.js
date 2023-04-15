import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true}
}, {collection: 'admins'})

export default adminsSchema;