import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyEntity } from './models/study.entity';
import { studiesService } from './services/studies.service';
import { StudiesController } from './controllers/studies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudyEntity])],
  providers: [studiesService],
  exports: [studiesService],
  controllers: [StudiesController],
})
export class StudyModule {}
