import mongoose from "mongoose";
import commentsSchema from "../schemas/comments-schema.js";

const commentsModel = mongoose.model('CommentModel', commentsSchema)

export default commentsModel