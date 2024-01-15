import { BaseModel } from 'src/modules/common/base/models/base.model';
import { UserMembershipEntity } from 'src/modules/user-memberships/models/user-membership.entity';
import { Column, Entity, JoinTable, OneToMany } from 'typeorm';

@Entity({ name: 'memberships' })
export class MembershipEntity extends BaseModel {
  @Column({ unique: true, length: 100 })
  title: string | null;
  @Column({ nullable: true, length: 255 })
  description: string | null;
  @Column()
  amount: number;
  @OneToMany(() => UserMembershipEntity, (um) => um.membership)
  @JoinTable()
  userMemberships: UserMembershipEntity[];
}
