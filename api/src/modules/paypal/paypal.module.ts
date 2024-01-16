import { Module } from '@nestjs/common';
import { PaypalService } from './services/paypal.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from '../common/common.module';
@Module({
  imports: [CommonModule, ConfigModule],
  providers: [PaypalService, ConfigService],

})
export class PaypalPaymentsModule {}
