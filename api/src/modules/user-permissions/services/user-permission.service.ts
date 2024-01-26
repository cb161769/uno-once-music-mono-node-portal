import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserPermissionEntity } from '../models/user-permission.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class userPermissionService extends TypeOrmCrudService<UserPermissionEntity> {
  constructor(@InjectRepository(UserPermissionEntity) repo) {
    super(repo);
  }
}
