import { Injectable } from '@nestjs/common';
import { StudyEntity } from '../models/study.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class studiesService extends TypeOrmCrudService<StudyEntity> {
  constructor(@InjectRepository(StudyEntity) repo) {
    super(repo);
  }
}
