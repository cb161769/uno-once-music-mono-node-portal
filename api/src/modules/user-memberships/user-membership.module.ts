import { Module } from '@nestjs/common';
import { UserMembershipEntity } from './models/user-membership.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMembershipService } from './services/user-membership.service';
import { UserMembershipController } from './controllers/user-membership.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserMembershipEntity])],
  providers: [UserMembershipService],
  exports: [UserMembershipService],
  controllers: [UserMembershipController],
})
export class UserMembershipModule {}
