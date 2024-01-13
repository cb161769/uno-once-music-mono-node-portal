import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageEntity } from './models/page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PageEntity])],
})
export class PageModule {}
