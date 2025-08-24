import {Request, Response} from "express";
import { BaseController } from "./base.controller";
import { UserService } from "../services/user.service";

export class UserController extends BaseController{
    private service:any= new UserService();
    async register(req: Request, res: Response){
        try{
            const {email,password, role}= req.body;
            
            const user= await this.service.register(email,password,role);
            
            this.sendSuccess(res,user,"Successfully registered");
        }
        catch(err:any){
            
            this.sendError(res,"Something Went Wrong",500);
        }
    }
    async login(req:Request, res:Response){
        try{
            const {email, password} = req.body;
            const result:string=await this.service.login(email,password);
            this.sendSuccess(res,result,"Login successful");
        }
        catch(err:any){
            this.sendError(res,err.message,401);
        }
    }

}