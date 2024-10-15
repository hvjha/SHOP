import { productModel } from "../../models/productModel.js"

export const searchProductController = async(req,res) =>{
    try {
        const query = req.query.q
        const regex = new RegExp(query,"i","g")
        const product = await productModel.find({
            "$or":[
                {
                    productName:regex
                },
                {
                    category:regex
                }
            ]
        })
        res.status(200).json({
            data:product,
            message:"search Product List",
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