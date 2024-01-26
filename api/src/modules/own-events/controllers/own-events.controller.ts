import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { OwnEventEntity } from '../models/own-event.entity';
import { ownEventService } from '../services/own-events.service';
@Crud({
  model: {
    type: OwnEventEntity,
  },
})
@ApiTags('own-events')
@Controller({
  version: '1',
  path: 'user-membership',
})
export class OwnEventController {
  /**
   *
   */
  constructor(public service: ownEventService) {
    // super();
  }
}
