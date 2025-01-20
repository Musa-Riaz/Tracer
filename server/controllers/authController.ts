import { catchAsync } from '../middlewares/catchAsync';
import { userModel } from '../models/userModel';
import { ErrorHandler } from '../middlewares/errorMiddleware';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";

export const userSignUpController = async (req: Request, res: Response , next: NextFunction) : Promise<void> => {
    const { username, email, password } = req.body;
    console.log(req.body);
    if(!username || !email || !password){
      return next(new ErrorHandler("Please provide all the fields", 400));
    }
    try{
const user = await userModel.create({
    username,
    email,
    password
});
res.status(201).json({
    success: true,
    message: "User created Successfully",
    data: user
})
    }
    catch(err){
        console.log(err);
        return next(new ErrorHandler(err.message, 500));
    }
}

export const userSignInController = catchAsync(async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const { email, password } = req.body;
    if(!email || !password){
        return next(new ErrorHandler("Please provide email and password", 400));
    }
    try{
    const user = await userModel.findOne({email}).select("+password"); //the +password is used to select the password field which is set to select: false in the schema
    if(!user){
        return next(new ErrorHandler("Invalid credentials", 401));
    }
    const isMatch = await user.matchPasswords(password);
   if(isMatch){
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("user_token", token, {httpOnly: true}).status(200).json({
        success:true,
        message: "User logged in successfully",
        username: user.username,
    })
   }
   else{
    return next(new ErrorHandler("Invalid credentials", 401));
   }
    }
    catch(err){
        console.log(err);
    }
})


export const userSignOutController = (req: Request, res: Response) =>{
  
    res.clearCookie("user_token");
    res.status(200).json({
        success: true,
        message: "User signed out successfully"
    });
  }