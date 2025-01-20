import express from 'express'
const router = express.Router()
import { userSignUpController, userSignInController, userSignOutController } from '../controllers/authController'

router.post("/signup", userSignUpController);

router.post("/signin", userSignInController);

router.get("/signout", userSignOutController);

export default router