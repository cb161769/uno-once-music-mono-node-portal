import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageEntity } from './models/page.entity';
import { pageService } from './services/pages.service';
import { PagesController } from './controllers/page.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PageEntity])],
  providers: [pageService],
  exports: [pageService],
  controllers: [PagesController],
})
export class PageModule {}
