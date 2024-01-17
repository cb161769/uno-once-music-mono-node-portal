import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { BaseModel } from '../../common/base/models/base.model';
import { UserStatus } from '../enums/user-status.enum';
import { UserMembershipEntity } from 'src/modules/user-memberships/models/user-membership.entity';
import { UserPermissionEntity } from 'src/modules/user-permissions/models/user-permission.entity';
import { ReservationEntity } from 'src/modules/reservations/models/reservation.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseModel {
  @Column({ length: 50 })
  fullName: string;
  @Column({ length: 100 })
  email: string;
  @Column({ nullable: true, length: 255 })
  bio: string | null;
  @Column()
  password: string;
  @Column({ nullable: true })
  passwordToken: string;
  @Column({ default: false })
  isAdmin: boolean;
  @Column({ default: 0 })
  status: UserStatus;
  @OneToMany(() => UserMembershipEntity, (um) => um.user)
  @JoinTable()
  memberships: UserMembershipEntity[];
  @OneToMany(() => UserPermissionEntity, (up) => up.user)
  @JoinTable()
  permissions: UserPermissionEntity[];

  @OneToMany(() => ReservationEntity, (r) => r.user)
  @JoinTable()
  reservations: ReservationEntity[];

  @Column({ nullable: true })
  lastLoginAt: Date;

  @Column({ default: false })
  isVerified: boolean;
}
