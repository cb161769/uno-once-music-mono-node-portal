import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { UserMembershipService } from '../services/user-membership.service';
import { Crud } from '@nestjsx/crud';
import { ReservationEntity } from '../models/reservation.entity';
import { reservationsService } from '../services/user-permission.service';
@Crud({
  model: {
    type: ReservationEntity,
  },
})
@ApiTags('reservations')
@Controller({
  version: '1',
  path: 'user-membership',
})
export class reservationsController {
  /**
   *
   */
  constructor(public service: reservationsService) {
    // super();
  }
}
