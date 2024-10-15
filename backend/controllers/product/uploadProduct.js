import { uploadProductPermission } from "../../helpers/permission.js"
import { productModel } from "../../models/productModel.js"

export const UploadProductController = async(req,res)=>{
    try {
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("permission denied")
        }
        
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()
        res.status(201).json({
            message:"product uploaded successfully",
            error:false,
            success:true,
            data: saveProduct
        })
    } catch (error) {
        res.status(400).json({
            message:error.message || error,
            error:true,
            success:false
        })
    }
}