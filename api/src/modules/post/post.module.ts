import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './models/post.entity';
import { postService } from './services/posts.service';
import { postController } from './controllers/post.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [postService],
  exports: [postService],
  controllers: [postController],
})
export class PostModule {}
