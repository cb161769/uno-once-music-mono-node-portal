import { Injectable } from '@nestjs/common';
import { PostEntity } from '../models/post.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class postService extends TypeOrmCrudService<PostEntity> {
  constructor(@InjectRepository(PostEntity) repo) {
    super(repo);
  }
}
