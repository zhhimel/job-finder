import {Request, Response, Router} from "express"
import { UserController } from "../controllers/user.controller";
const controllers=new UserController();
const router=Router();

router.post("/register",(req,res)=>controllers.register(req,res));
router.post("/login",(req,res)=>controllers.login(req,res));
export default router;