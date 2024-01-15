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
  AUTH_SECRET: string;
  @IsString()
  JWT_EXPIRATION_TIME: string;
  @IsString()
  ORIGIN: string;
  @IsString()
  ENABLE_DOCUMENTATION: string;
}
