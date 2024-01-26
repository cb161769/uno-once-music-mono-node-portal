import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { usersService } from './services/user.service';
import { UsersController } from './controller/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [usersService],
  controllers: [UsersController],
  exports: [usersService],
})
export class UserModule {}
