import {Request, Response, NextFunction} from 'express';

type AsyncMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>;


export const catchAsync = (funct : AsyncMiddleware)=> {
    return (req: Request, res: Response, next: NextFunction) => {
        funct(req, res, next).catch(next);
    }
}