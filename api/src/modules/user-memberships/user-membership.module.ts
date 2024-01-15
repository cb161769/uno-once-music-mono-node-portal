import { Module } from '@nestjs/common';
import { UserMembershipEntity } from './models/user-membership.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserMembershipEntity])],
})
export class UserMembershipModule {}
