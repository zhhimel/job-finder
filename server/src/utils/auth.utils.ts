import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
const SALT_ROUNDS:number=10;
export const hashPassword=async (password: string)=>{
    
    return bcrypt.hash(password,SALT_ROUNDS);
}
export const comparePassword= async (password: string, hash: string) =>{
    return bcrypt.compare(password,hash);
}
export const generateToken=(payload: object)=>{
    return jwt.sign(payload,process.env.JWT_SECRET||"secretkey",{expiresIn:"7d"});
};
export const verifyToken=(token: string)=>{
    return jwt.verify(token, process.env.JWT_SECRET||'secretkey');
}