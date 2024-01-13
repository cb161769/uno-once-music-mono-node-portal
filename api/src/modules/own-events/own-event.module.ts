import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnEventEntity } from './models/own-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OwnEventEntity])],
})
export class OwnEventModule {}
