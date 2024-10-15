import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
    },
    role: String
},{timestamps:true})

export const userModel = mongoose.model("user",userSchema);