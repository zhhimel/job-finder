import express, {Application, Request, Response} from 'express';
import cors from 'cors';
const app: Application=express();
app.use(cors());
export default app;