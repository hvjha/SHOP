import { addToCartModel } from "../../models/cartProduct.js"

export const countAddToCartProductController = async(req,res)=>{
    try {
        const userId = req.userId
        const count = await addToCartModel.countDocuments({
            userId : userId
        })
        res.json({
            data:{
                count: count
            },
            message : "ok",
            error:false,
            success:true
        })
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error:true,
            success:false
        })
    }
}