import { BaseModel } from 'src/modules/common/base/models/base.model';
import { MembershipEntity as MembershipEntity } from 'src/modules/memberships/models/membership.entity';
import { UserEntity } from 'src/modules/users/models/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'user-memberships' })
export class UserMembershipEntity extends BaseModel {
  @Column({ nullable: true })
  data: string | null; //payload de lo que retorne paypal
  @Column({ nullable: true })
  paymentId: string | null; //identificador del pago
  @Column({ name: 'userId' })
  userId: string;

  @Column({ name: 'membershipId' })
  membershipId: string;

  @ManyToOne(() => MembershipEntity, (m) => m.userMemberships)
  @JoinTable()
  membership: MembershipEntity;

  @ManyToOne(() => UserEntity, (user) => user.memberships)
  @JoinTable()
  user: UserEntity;
}
