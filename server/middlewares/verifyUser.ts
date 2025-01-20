import jwt, { JwtPayload } from "jsonwebtoken";
import { userModel } from "../models/userModel";
import {Request, Response, NextFunction} from "express";
import { ErrorHandler } from "./errorMiddleware";

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies.access_token;
    
    if(!token){
        return next(new ErrorHandler("Please login to access this route", 401));
    }
    if(!process.env.JWT_SECRET){
        return next(new ErrorHandler("JWT_SECRET is not defined", 500));
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err,decoded) =>{
        if(err){
            return next(new ErrorHandler("Please login to access this route", 401));
        }
        //passing the id obtained by verifying the user in the request to the next function
        req.user = decoded;
        next();
    }
)}