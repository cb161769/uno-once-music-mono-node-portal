import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { AuthModule } from '../auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    HealthcheckModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get('HTTP_TIMEOUT'),
        maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [HttpModule],
})
export class CommonModule {}
