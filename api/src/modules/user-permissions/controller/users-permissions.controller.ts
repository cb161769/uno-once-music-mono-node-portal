import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UserPermissionEntity } from '../models/user-permission.entity';
import { userPermissionService } from '../services/user-permission.service';
import { ApiTags } from '@nestjs/swagger';
@Crud({
  model: {
    type: UserPermissionEntity,
  },
})
@ApiTags('user-permissions')
@Controller({
  version: '1',
  path: 'users-permissions',
})
export class userPermissionController
{
  //service: CrudService<UserPermissionEntity>;
  constructor(public service: userPermissionService) {}
}
