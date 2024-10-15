import { productModel } from "../../models/productModel.js"

export const getProductDetailsController = async(req,res) =>{
    try{
        const { productId } = req.body
        // console.log(req.body)
        const product = await productModel.findById(productId)
        // console.log("product",product)
        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        })

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}