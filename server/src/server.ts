import dotenv from 'dotenv'
import prisma from './config/prisma';
dotenv.config();
import app from './app';
const PORT=process.env.PORT || 5000;
async function startServer(){
    try{
        await prisma.$connect();
        app.listen(PORT, ()=>{
            console.log(`Server is running`);
        });
    }
    catch(err){
        console.error('Error found', err);
    }
}
process.on('SIGINT',async ()=>{
    console.log('Sutting Down Gracefully');
    try{
        await prisma.$disconnect();

    }
    catch(err){
        console.error('Error during shutdown',err);
    }
    process.exit(0);
});
startServer();
