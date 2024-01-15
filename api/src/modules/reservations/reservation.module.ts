import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from './models/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
})
export class ReservationModule {}
