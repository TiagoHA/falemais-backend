import { PhonePlan } from 'src/phone-plans/entities/phone-plan.entity';
import { Rate } from 'src/rate/entities/rate.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity('price_report')
export class PriceReport extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'minutes_spent', default: 0 })
  minutesSpent: number;

  @JoinColumn({ name: 'phone_plan_id' })
  @ManyToOne(() => PhonePlan, (plan) => plan.id, { eager: true })
  phonePlan: PhonePlan;

  @JoinColumn({ name: 'rate_id' })
  @ManyToOne(() => Rate, (rate) => rate.id, { eager: true })
  rate: Rate;

  @CreateDateColumn({ name: 'created_at', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt: Date;
}
