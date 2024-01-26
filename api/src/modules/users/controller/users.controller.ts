import { Crud } from '@nestjsx/crud';
import { UserEntity } from '../models/user.entity';
import { Controller } from '@nestjs/common';
import { usersService } from '../services/user.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: UserEntity,
  },
})
@ApiTags('users')
@Controller({
  version: '1',
  path: 'users',
})
export class UsersController {
  // service: CrudService<UserEntity>;
  constructor(public serivice: usersService) {}
}
