import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity } from '../models/page.entity';

@Injectable()
export class pageService extends TypeOrmCrudService<PageEntity> {
  constructor(@InjectRepository(PageEntity) repo) {
    super(repo);
  }
}
