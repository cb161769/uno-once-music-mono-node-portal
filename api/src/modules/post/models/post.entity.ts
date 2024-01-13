import { BaseModel } from 'src/modules/common/base/models/base.model';
import { Column, Entity } from 'typeorm';
import { PostType } from '../enums/post-type.enum';

@Entity({ name: 'posts' })
export class PostEntity extends BaseModel {
  @Column({ length: 100 })
  title: string | null;
  @Column()
  description: string | null;
  @Column({ nullable: true })
  link: string | null;
  @Column()
  type: PostType;
}
