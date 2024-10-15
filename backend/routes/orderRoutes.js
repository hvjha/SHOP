import express from 'express'
import { paymentController } from '../controllers/order/paymentController.js'
import authToken from './../middleware/authToken.js';
import{ webhooks} from '../controllers/order/webhook.js';
import { orderController } from '../controllers/order/orderController.js';
import { allOrderController } from '../controllers/order/allOrderController.js';


const router = express.Router()
router.post("/checkout",authToken,paymentController)
router.post('/webhook',webhooks)
router.get("/order-list",authToken,orderController)
router.get("/all-order",authToken,allOrderController)

export default router