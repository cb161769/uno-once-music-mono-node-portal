import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  createdAt: Date;
  @Column({ nullable: true })
  updatedAt: Date | null;
  @Column({ default: 0 })
  isDeleted: boolean;
}