import { userModel } from "../../models/userModel.js";

export const updateUser = async(req,res)=>{
    try {
        const sessionUser = req.userId
        const {userId,name,email,role} =req.body;
        const payload = {
            ...(email && {email:email}),
            ...(name && {name:name}),
            ...(role && {role:role}),
        }

        const user = await userModel.findById(sessionUser)
        console.log("user Role", user.role)
        const updateUser = await userModel.findByIdAndUpdate(userId,payload)

        res.json({
            data:updateUser,
            message: "user updated",
            success:true,
            error:false,
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error:true,
            success:false
        })
    }
}