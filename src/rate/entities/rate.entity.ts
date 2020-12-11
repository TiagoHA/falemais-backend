import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('rate')
export class Rate extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prefixOrigin: string;

  @Column()
  prefixDestiny: string;

  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
