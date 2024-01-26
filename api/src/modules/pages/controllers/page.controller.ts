import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { UserMembershipService } from '../services/user-membership.service';
import { Crud } from '@nestjsx/crud';
import { PageEntity } from '../models/page.entity';
import { pageService } from '../services/pages.service';
//import { UserMembershipEntity } from '../models/user-membership.entity';
@Crud({
  model: {
    type: PageEntity,
  },
})
@ApiTags('pages')
@Controller({
  version: '1',
  path: 'user-membership',
})
export class PagesController {
  /**
   *
   */
  constructor(public service: pageService) {
    // super();
  }
}
