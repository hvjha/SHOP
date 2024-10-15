import express from 'express'
import { userSignUpController } from '../controllers/user/userSignup.js';
import { userSignInController } from '../controllers/user/userSignIn.js';
import { userDetailsController } from '../controllers/user/userDetails.js';
import authToken from './../middleware/authToken.js';
import { userLogOut } from '../controllers/user/userLogOut.js';
import { allUsers } from '../controllers/user/allUsers.js';
import { updateUser } from '../controllers/user/updateUser.js';

const router = express.Router()

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/logout",userLogOut)

// admin pannel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

export default router;