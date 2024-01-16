import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './modules/common/common.module';
import databaseConfig from './modules/common/database/config/database.config';
import authConfig from './modules/auth/config/auth.config';
import { validate } from './modules/common/config/utils/validation.utils';
import { UserModule } from './modules/users/user.module';
import { UserMembershipModule } from './modules/user-memberships/user-membership.module';
import { MembershipModule } from './modules/memberships/membership.module';
import { PaypalPaymentsModule } from './modules/paypal/paypal.module';
import paypalConfig from './modules/paypal/config/paypal.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, paypalConfig],
      cache: true,
      validate,
      envFilePath: '.env',
    }),
    CommonModule,
    UserModule,
    UserMembershipModule,
    MembershipModule,
    PaypalPaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
