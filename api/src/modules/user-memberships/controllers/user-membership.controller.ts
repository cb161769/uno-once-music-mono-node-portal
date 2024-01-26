import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserMembershipService } from '../services/user-membership.service';
import { Crud } from '@nestjsx/crud';
import { UserMembershipEntity } from '../models/user-membership.entity';
@Crud({
  model: {
    type: UserMembershipEntity,
  },
})
@ApiTags('user-membership')
@Controller({
  version: '1',
  path: 'user-membership',
})
export class UserMembershipController {
  /**
   *
   */
  constructor(public service: UserMembershipService) {
    // super();
  }
}
