import { BaseModel } from 'src/modules/common/base/models/base.model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'own-events' })
export class OwnEventEntity extends BaseModel {
  @Column({ length: 100 })
  title: string;
  @Column({ nullable: true, length: 200 })
  description: string | null;
  @Column({ nullable: true })
  link: string | null;
  @Column()
  dateFrom: Date;
  @Column()
  dateTo: Date;
  @Column()
  hours: number; //ONLY SAVE HOURS EXAMPLE: 8 (8 HOURS)
}
