import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './modules/common/common.module';
<<<<<<< HEAD
import databaseConfig from './modules/common/database/config/database.config';
import authConfig from './modules/auth/config/auth.config';
import { validate } from './modules/common/config/utils/validation.utils';
=======
import { UserModule } from './modules/users/user.module';
import { UserMembershipModule } from './modules/user-memberships/user-membership.module';
import { MembershipModule } from './modules/memberships/membership.module';

>>>>>>> b82c56c5c97798fcab3cd3b2a1d12fe888ba30cf
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
<<<<<<< HEAD
      load: [databaseConfig, authConfig],
      cache: true,
      validate
=======
      envFilePath: '.env',
>>>>>>> b82c56c5c97798fcab3cd3b2a1d12fe888ba30cf
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
