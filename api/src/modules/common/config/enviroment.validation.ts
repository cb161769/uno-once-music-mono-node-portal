import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Environment } from './enums/enviroments.enums';

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
  @IsNumber()
  PORT: number;
  @IsString()
  DB_TYPE: string;
  @IsString()
  DB_HOST: string;
  @IsString()
  DB_PORT: string;
  @IsString()
  DB_USERNAME: string;
  @IsString()
  DB_PASSWORD: string;
  @IsString()
  DB_DATABASE: string;
  @IsString()
  DB_SYNCHRONIZE: string;
  @IsString()
  DB_LOGGING: string;
  @IsString()
  DB_USE_SSL: string;
  @IsString()
  AUTH_SECRET: string;
  @IsString()
  JWT_EXPIRATION_TIME: string;
  @IsString()
  ORIGIN: string;
  @IsString()
  ENABLE_DOCUMENTATION: string;
  @IsNumber()
  HTTP_TIMEOUT: number;
  @IsNumber()
  HTTP_MAX_REDIRECTS: number;
  @IsString()
  PAYPAL_MODE: string;
  @IsString()
  PAYPAL_CLIENT_ID: string;
  @IsString()
  PAYPAL_CLIENT_SECRET: string;
  @IsString()
  PAYPAL_LIVE_URL: string;
  @IsString()
  PAYPAL_API_VERSION:string;
  @IsString()
  PAYPAL_SANDBOX_URL: string;
}
