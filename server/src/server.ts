import dotenv from 'dotenv'
import prisma from './config/prisma';
dotenv.config();
import app from './app';
import redis from './config/redis';
const PORT=process.env.PORT || 5000;
async function startServer(){
    try{
        await prisma.$connect();
        await redis.set('server_status','running');
        const redisValue=await redis.get('server_status');
        console.log('Connected to Redis:', redisValue);
        app.listen(PORT, ()=>{
            console.log(`Server is running`);
        });
    }
    catch(err){
        console.error('Error found', err);
    }
}

startServer();
