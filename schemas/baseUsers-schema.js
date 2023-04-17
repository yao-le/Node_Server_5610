import mongoose from "mongoose";

const options = {
    discriminatorKey: "role",
    collection: "users"
};

const baseUsersSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    portrait: String,
    createdAt: { type: Date, default: Date.now },
}, options);

export default baseUsersSchema;