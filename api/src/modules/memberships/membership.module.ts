import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipEntity } from './models/membership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipEntity])],
})
export class MembershipModule {}
