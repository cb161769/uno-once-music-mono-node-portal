import { Module } from '@nestjs/common';
import { PaypalService } from './services/paypal.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from '../common/common.module';
import { PaypalController } from './controllers/paypal.controller';
import { PaypalAuthController } from './controllers/paypal.auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from '../users/models/user.entity';
@Module({
  imports: [CommonModule, ConfigModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [PaypalService, ConfigService],
  controllers: [PaypalController, PaypalAuthController],
})
export class PaypalPaymentsModule {}
