import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnEventEntity } from './models/own-event.entity';
import { ownEventService } from './services/own-events.service';
import { OwnEventController } from './controllers/own-events.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OwnEventEntity])],
  providers: [ownEventService],
  exports: [ownEventService],
  controllers: [OwnEventController],
})
export class OwnEventModule {}
