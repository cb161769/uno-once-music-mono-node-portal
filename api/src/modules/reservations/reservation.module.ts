import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from './models/reservation.entity';
import { reservationsService } from './services/user-permission.service';
import { reservationsController } from './controllers/reservations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
  providers: [reservationsService],
  exports: [reservationsService],
  controllers: [reservationsController],
})
export class ReservationModule {}
