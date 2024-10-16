import { addToCartModel } from "../../models/cartProduct.js"

export const addToCartController = async(req,res)=>{
    try {
        const {productId} = req.body
        const currentUser = req.userId
        const isProductAvailable = await addToCartModel.findOne({productId,userId:currentUser})
        if(isProductAvailable){
            return res.json({
                message:"Already exits in Add to cart",
                success:false,
                error:true
            })
        }
        const payload = {
            productId:productId,
            quantity:1,
            userId:currentUser
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()
        res.json({
            data:saveProduct,
            message:"Product Added To Cart",
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