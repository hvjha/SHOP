import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Config/db.js';
import userRouter from './routes/userRoutes.js'
import productRoute from './routes/productRoutes.js'
import cartRoute from './routes/cartRoute.js'
import orderRoutes from './routes/orderRoutes.js'
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

// routes
app.use("/api/v1/user",userRouter);
app.use("/api/v1/product",productRoute)
app.use("/api/v1/cart",cartRoute)
app.use("/api/v1/payment",orderRoutes)
const PORT = process.env.PORT || 5500 
app.listen(PORT,()=>{
    connectDB();
    console.log(`server is listen at ${PORT}`)
})