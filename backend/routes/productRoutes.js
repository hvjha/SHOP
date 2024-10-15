import express from 'express'
import { UploadProductController } from '../controllers/product/uploadProduct.js';
import authToken from './../middleware/authToken.js';
import { getProductController } from '../controllers/product/getProduct.js';
import { updateProductController } from '../controllers/product/updateProduct.js';
import { getCategoryProductController } from '../controllers/product/getCategoryProductOne.js';
import { getCategoryWiseProduct } from '../controllers/product/getCategoryWiseProduct.js';
import { getProductDetailsController } from '../controllers/product/getProductDetails.js';
import { searchProductController } from '../controllers/product/searchProduct.js';
import { filterProductController } from '../controllers/product/filterProduct.js';


const router = express.Router()
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProductController)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetailsController)
router.get("/search",searchProductController)
router.post("/filter-product",filterProductController)
export default router;