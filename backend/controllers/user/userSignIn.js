import { userModel } from "../../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const userSignInController = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email){
            throw new Error("please provide email")
        }
        if(!password){
            throw new Error("please provide password")
        }
        const user = await userModel.findOne({email})
        if(!user){
            throw new Error("User Not Found");
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(isPasswordMatch){
            const tokenData = {
                _id:user._id,
                email:user.email,
            }
            const token =await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
            const tokenOption = {
                httpOnly:true,
                secure:true,
                sameSite : 'None'
            }
            res.cookie("token",token,tokenOption).status(200).json({
                message:"login successfully",
                data:token,
                success:true,
                error:false
            })
        }else{
            throw new Error("please check password")
        }
    } catch (error) {
        res.status(400).json({ 
            message:error.message || err,
            error:true,
            success:false,
        })
    }
}