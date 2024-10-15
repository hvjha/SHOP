import { userModel } from "../../models/userModel.js";

export const allUsers = async(req,res) =>{
    try {
        // console.log("userId",req.userId);

        const allUsers = await userModel.find();

        res.status(200).json({
            message:"All user",
            data:allUsers,
            success:true,
            error:false
        })
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}