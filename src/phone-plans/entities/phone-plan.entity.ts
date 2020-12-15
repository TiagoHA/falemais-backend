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

@Entity('phone_plans')
export class PhonePlan extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ default: 0 })
  minutes: number;

  @Column('decimal', { name: 'initial_cost', precision: 12, scale: 2, default: '0.0' })
  initialCost: number;

  @Column('decimal', { name: 'percentage_additional_minute_cost', precision: 12, scale: 2, default: '10.0' })
  percentageAdditionalMinuteCost: number;

  @OneToMany((type) => PriceReport, (report) => report.rate)
  report: PriceReport[];

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;
}
