import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
prisma.$connect()
.then(()=>console.log('Connected to pg via Prisma'))
.catch((err)=>console.error('Prisma got error',err));
export default prisma;
