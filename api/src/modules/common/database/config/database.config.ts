import { registerAs } from '@nestjs/config';
export default registerAs('database', () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
  logger: 'advanced-console',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  entities: ['dist/**/*.entity.{ts,js}'],
  ssl: process.env.DB_USE_SSL === 'true',
}));
