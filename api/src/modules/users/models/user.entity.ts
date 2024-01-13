import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { BaseModel } from '../../common/base/models/base.model';
import { UserStatus } from '../enums/user-status.enum';
import { UserMembershipEntity } from 'src/modules/user-memberships/models/user-membership.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseModel {
  @Column({ length: 50 })
  fullName: string;
  @Column({ length: 100 })
  email: string;
  @Column({ nullable: true, length: 255 })
  bio: string | null;
  @Column({ length: 20, unique: true })
  username: string;
  password: string;
  @Column({ nullable: true })
  passwordToken: string;
  @Column()
  isAdmin: boolean;
  @Column()
  status: UserStatus;
  @OneToMany(() => UserMembershipEntity, (um) => um.user)
  @JoinTable()
  memberships: UserMembershipEntity[];
}
