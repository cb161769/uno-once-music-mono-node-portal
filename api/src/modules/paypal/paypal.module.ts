import { Module } from '@nestjs/common';
import { PaypalService } from './services/paypal.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from '../common/common.module';
import { PaypalController } from './controllers/paypal.controller';
import { PaypalAuthController } from './controllers/paypal.auth.controller';
@Module({
  imports: [CommonModule, ConfigModule],
  providers: [PaypalService, ConfigService],
  controllers: [PaypalController, PaypalAuthController],
})
export class PaypalPaymentsModule {}
