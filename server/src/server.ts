import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import prisma from './config/prisma';
import redis from './config/redis';

const PORT = process.env.PORT || 5000;

async function connectServices() {
  try {
    await prisma.$connect();
    console.log("✅ Postgres connected");
  } catch (err) {
    console.error("⚠️ Prisma connection failed:", err);
  }

  try {
    await redis.set("server_status", "running");
    const redisValue = await redis.get("server_status");
    console.log("✅ Redis connected:", redisValue);
  } catch (err) {
    console.error("⚠️ Redis connection failed:", err);
  }
}
async function startServer() {
  await connectServices();
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

startServer();
