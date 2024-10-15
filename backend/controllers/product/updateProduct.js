import { uploadProductPermission } from "../../helpers/permission.js"
import { productModel } from "../../models/productModel.js"

export const updateProductController = async(req,res)=>{
    try {
        if(!uploadProductPermission(req.userId)){
            throw new Error("permission Denied")
        }
        const {_id, ...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id,resBody)

        res.status(200).json({
            message:"product updated successfully",
            data:updateProduct,
            success:true,
            error:false
        })
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error : true,
            success : false
        })
    }
}