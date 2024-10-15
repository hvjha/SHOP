import { addToCartModel } from './../../models/cartProduct.js';
export const addToCartViewProductController = async(req,res)=>{
    try {
        const currentUser = req.userId
        const allProduct = await addToCartModel.find({
            userId : currentUser
        }).populate("productId")
        res.status(200).json({
            data:allProduct,
            success:true,
            error:false
        })
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error:true,
            success:false
        })
    }
}