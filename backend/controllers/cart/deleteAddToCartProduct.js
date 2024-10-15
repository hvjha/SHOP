import { addToCartModel } from "../../models/cartProduct.js"

export const deleteAddToCartProductController = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({ _id : addToCartProductId})

        res.status(400).json({
            message : "Product Deleted From Cart",
            error : false,
            success : true,
            data : deleteProduct
        })
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error:true,
            success:false
        })
    }
}