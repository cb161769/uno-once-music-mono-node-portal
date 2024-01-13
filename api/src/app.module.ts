import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './modules/common/common.module';
import { UserModule } from './modules/users/user.module';
import { UserMembershipModule } from './modules/user-memberships/user-membership.module';
import { MembershipModule } from './modules/memberships/membership.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CommonModule,
    UserModule,
    UserMembershipModule,
    MembershipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
