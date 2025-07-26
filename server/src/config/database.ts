import { DataSource } from 'typeorm'
import { config } from './environment'
import { Job } from '../models/Job';
import { Company } from '../models/Company';
import { ScrapingConfig } from '../models/ScrapingConfig';
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    synchronize:config.server.nodeEnv== 'development',
    logging: config.server.nodeEnv=='development',
    entities: [Job, Company, ScrapingConfig],
    migrations:['src/mirgations/*.ts'],
    subscribers: ['src/subscribers/*.ts'],

});