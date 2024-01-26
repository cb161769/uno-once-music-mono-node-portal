import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnEventEntity } from '../models/own-event.entity';
//import { PageEntity } from '../models/page.entity';

@Injectable()
export class ownEventService extends TypeOrmCrudService<OwnEventEntity> {
  constructor(@InjectRepository(OwnEventEntity) repo) {
    super(repo);
  }
}
