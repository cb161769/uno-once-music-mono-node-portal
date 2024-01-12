import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './modules/common/common.module';
import databaseConfig from './modules/common/database/config/database.config';
import authConfig from './modules/auth/config/auth.config';
import { validate } from './modules/common/config/utils/validation.utils';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig],
      cache: true,
      validate
    }),
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
