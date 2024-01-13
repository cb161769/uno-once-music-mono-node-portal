import { BaseModel } from 'src/modules/common/base/models/base.model';
import { UserEntity } from 'src/modules/users/models/user.entity';
import { Permission } from '../enums/permission.enum';
import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';

@Entity({ name: 'user-permissions' })
export class UserPermissionEntity extends BaseModel {
  @Column()
  permission: Permission;
  @Column({ length: 150, nullable: true })
  description: string | null;
  @Column({ name: 'userId' })
  userId: string;
  @ManyToOne(() => UserEntity, (u) => u.permissions)
  @JoinTable()
  user: UserEntity;
}
