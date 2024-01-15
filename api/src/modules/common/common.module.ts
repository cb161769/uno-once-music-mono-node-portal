import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [DatabaseModule, AuthModule, HealthcheckModule],
})
export class CommonModule {}
