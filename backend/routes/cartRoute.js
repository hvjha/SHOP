import express from 'express'
import { addToCartController } from '../controllers/cart/addToCartController.js';
import authToken from './../middleware/authToken.js';
import { countAddToCartProductController } from '../controllers/cart/countAddToCartProduct.js';
import { addToCartViewProductController } from '../controllers/cart/addToCartViewProduct.js';
import { updateAddToCartProductController } from '../controllers/cart/updateAddToCartProduct.js';
import { deleteAddToCartProductController } from '../controllers/cart/deleteAddToCartProduct.js';

const router = express.Router()
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProductController)
router.get("/view-cart-product",authToken,addToCartViewProductController)
router.post("/update-cart-product",authToken,updateAddToCartProductController)
router.delete("/delete-cart-product",authToken,deleteAddToCartProductController)
export default router;