import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermissionEntity } from './models/user-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPermissionEntity])],
})
export class UserPermissionModule {}
