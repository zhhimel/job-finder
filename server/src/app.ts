import express, {Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import userRouter from './routes/user.route' ;
const app: Application=express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from root!");
});

app.use("/api/users",userRouter);
export default app;