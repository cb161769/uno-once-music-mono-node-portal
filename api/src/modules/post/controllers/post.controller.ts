import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PostEntity } from '../models/post.entity';
import { postService } from '../services/posts.service';
import { ApiTags } from '@nestjs/swagger';
@Crud({
  model: {
    type: PostEntity,
  },
})
@ApiTags('posts')
@Controller({
  version: '1',
  path: 'posts',
})
export class postController {
  constructor(public service: postService) {}
}
