import { BaseModel } from 'src/modules/common/base/models/base.model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'studies' })
export class StudyEntity extends BaseModel {
  @Column({ length: 100 })
  title: string;
  @Column({ nullable: true })
  description: string | null;
}
