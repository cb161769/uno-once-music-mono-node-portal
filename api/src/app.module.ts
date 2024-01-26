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
import { UserPermissionModule } from './modules/user-permissions/user-permission.module';
import { StudyModule } from './modules/Studies/study.module';
import { ReservationModule } from './modules/reservations/reservation.module';
import { PostModule } from './modules/post/post.module';
import { PageModule } from './modules/pages/page.module';
import { OwnEventModule } from './modules/own-events/own-event.module';

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
    UserPermissionModule,
    StudyModule,
    MembershipModule,
    ReservationModule,
    PostModule,
    PageModule,
    OwnEventModule,
    PaypalPaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
