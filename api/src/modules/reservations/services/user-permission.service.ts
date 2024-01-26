import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
//import { UserPermissionEntity } from '../models/user-permission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationEntity } from '../models/reservation.entity';

@Injectable()
export class reservationsService extends TypeOrmCrudService<ReservationEntity> {
  constructor(@InjectRepository(ReservationEntity) repo) {
    super(repo);
  }
}
