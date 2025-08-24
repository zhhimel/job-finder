import { Response } from "express";
export class BaseController {
    sendSuccess(res: Response, data: any, message:string){
        res.status(200).json({ success: true, message,data});
    }
    sendError(res:Response, message:string, status:number){
        res.status(status).json({
            success: false, message
        });
    }
}