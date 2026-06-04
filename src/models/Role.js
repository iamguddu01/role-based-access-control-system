import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema({
    type : {
        type : String,
        required : true
    },
    permissions : {
        type : Map,
        of : Boolean,
        default : {},
    }, 
});

export const Role = mongoose.model('Role', roleSchema)