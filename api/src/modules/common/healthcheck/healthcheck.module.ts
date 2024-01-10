import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthcheckController } from './controllers/healthcheck.controller';

@Module({
  controllers: [HealthcheckController],
  imports: [TerminusModule, HttpModule],
})
export class HealthcheckModule {}
