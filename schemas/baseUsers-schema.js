import mongoose from "mongoose";

const options = {
    discriminatorKey: "role",
    collection: "users"
};

const baseUsersSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    portrait: {type: String, default: "https://cdn2.iconfinder.com/data/icons/communication-489/24/account_profile_user_contact_person_avatar_placeholder-512.png"},
    createdAt: { type: Date, default: Date.now },
}, options);

export default baseUsersSchema;