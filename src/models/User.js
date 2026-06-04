import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    email : {
        type : String,
        unique : true,
        required : true,
    },
    role : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Role"
    }
})

export const User = mongoose.model("User", userSchema);