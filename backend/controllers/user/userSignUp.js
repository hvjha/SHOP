import { userModel } from "../../models/userModel.js"
import bcrypt from 'bcryptjs'
export const userSignUpController = async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        const user = await userModel.findOne({email});
        if(user){
            throw new Error("user already register")
        }
        if(!email){
            throw new Error("please provide email")
        }
        if(!name){
            throw new Error("please provide name")
        }
        if(!password){
            throw new Error("please provide password")
        }

        const hashPassword = await bcrypt.hash(password,10);

        if(!hashPassword){
            throw new Error("Something is wrong");
        }
        const payload = {
            ...req.body,
            role:"GENERAL",
            password:hashPassword
        }
        const userData = new userModel(payload)

        const saveUser = await userData.save()
        res.status(201).json({
            data:saveUser,
            success:true,
            error:false,
            message:"User created successfully"
        })
    } catch (error) {
        res.status(400).json({ 
            message:error.message || err,
            error:true,
            success:false,
        })
    }
}