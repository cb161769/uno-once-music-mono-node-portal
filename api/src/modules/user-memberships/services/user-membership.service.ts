import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserMembershipEntity } from '../models/user-membership.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserMembershipService extends TypeOrmCrudService<UserMembershipEntity> {
  /**
   *
   */
  constructor(@InjectRepository(UserMembershipEntity) repo) {
    super(repo);
  }
}
