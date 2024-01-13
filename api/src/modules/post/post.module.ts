import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class PostModule {}
