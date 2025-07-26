import dotenv from 'dotenv'
dotenv.config();
export const config ={
    server: {
        port: process.env.PORT|| 3000,
        nodeEnv:process.env.NODE_ENV|| 'development',
        corsOrigin: process.env.CORS_ORIGIN|| 'http://localhost:3000'
    },
    database:{
        host: process.env.DB_HOST|| 'localhost',
        port: parseInt(process.env.DB_PORT||'5432'),
        username: process.env.DB_USERNAME|| 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'job_aggregator',
    },
    redis:{
        host: process.env.REDIS_HOST|| 'localhost',
        port: parseInt(process.env.REDIS_PORT||'6379'),
        password: process.env.REDIS_PASSWORD|| ''
    },
    scraping:{
        userAgent: process.env.USER_AGENT || 'Mozoilla/5.0(compatible; JobBot/1.0',
        requestDelay: parseInt(process.env.REQUEST_DELAY||'2000'),
        maxRetries: parseInt(process.env.MAX_RETRIES||'3'),
        timeout: parseInt(process.env.SCRAPING_TIMEOUT||'3000')
    },
    jwt:{
        secret: process.env.JWT_SECRET||'key',
        expiresIn: process.env.JWT_EXPIRES_IN|| '24h',
    }
};