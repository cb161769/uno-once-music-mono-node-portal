import { Controller } from '@nestjs/common';
import { studiesService } from '../services/studies.service';
import { ApiTags } from '@nestjs/swagger';
import { StudyEntity } from '../models/study.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: StudyEntity,
  },
})
@ApiTags('studies')
@Controller({
  version: '1',
  path: 'studies',
})
export class StudiesController {
  /**
   *
   */
  constructor(public service: studiesService) {
    // super();
  }
}
