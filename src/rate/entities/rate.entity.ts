import { PriceReport } from 'src/price-report/entities/price-report.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('rate')
export class Rate extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'prefix_origin' })
  prefixOrigin: string;

  @Column({ name: 'prefix_destiny' })
  prefixDestiny: string;

  @Column('decimal', { precision: 12, scale: 2 })
  price: number;

  @OneToMany((type) => PriceReport, (report) => report.rate)
  report: PriceReport[];

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;
}
