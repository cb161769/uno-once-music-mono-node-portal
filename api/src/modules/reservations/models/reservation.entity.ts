import { BaseModel } from 'src/modules/common/base/models/base.model';
import { UserEntity } from 'src/modules/users/models/user.entity';
import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';
import { ReservationStatus } from '../enums/reservation-status.enum';

@Entity({ name: 'reservations' })
export class ReservationEntity extends BaseModel {
  @Column({ length: 255 })
  description: string | null;
  @Column({ name: 'userId' })
  userId: string;
  @ManyToOne(() => UserEntity, (u) => u.reservations)
  @JoinTable()
  user: UserEntity;
  @Column()
  dateFrom: Date;
  @Column()
  dateTo: Date;
  @Column()
  hours: number;
  @Column()
  status: ReservationStatus;
}
