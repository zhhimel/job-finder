import { Request, Response,NextFunction } from "express";
import { verifyToken } from "../utils/auth.utils";
export const isAuthenticated=(req: Request, res: Response, next: NextFunction)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({success:false, message: "Unauthorized"});
    }
    const token=authHeader.split(" ")[1];
    try{
        const decoded=verifyToken(token);
        (req as any).user=decoded;
        next();
    } 
    catch(err){
        return res.status(401).json({success:false, message:"Invalid token"});
    }
};
export const isAdmin=(req: Request, res: Response, next: NextFunction)=>{
    const user=(req as any).user;
    if(user.role!== "admin"){
        return res.status(403).json({success: false, message:"Forbidden"});
    }
    next();
}
