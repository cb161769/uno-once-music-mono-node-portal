import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermissionEntity } from './models/user-permission.entity';
import { userPermissionService } from './services/user-permission.service';
import { userPermissionController } from './controller/users-permissions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserPermissionEntity])],
  providers: [userPermissionService],
  exports: [userPermissionService],
  controllers: [userPermissionController],
})
export class UserPermissionModule {}
