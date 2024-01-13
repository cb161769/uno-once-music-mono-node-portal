import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyEntity } from './models/study.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyEntity])],
})
export class StudyModule {}
