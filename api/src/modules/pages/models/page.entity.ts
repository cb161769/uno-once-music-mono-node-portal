import { BaseModel } from 'src/modules/common/base/models/base.model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'pages' })
export class PageEntity extends BaseModel {
  @Column({ length: 30 })
  path: string; //debe almacenar el path que utiliza la pagina que con eso se identificara la pagina
  @Column({ length: 50 })
  title: string;
  @Column({ nullable: true })
  description: string;
}
