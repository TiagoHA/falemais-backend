import { Module } from '@nestjs/common';
import { PhonePlansService } from './phone-plans.service';
import { PhonePlansController } from './phone-plans.controller';
import { phonePlansProviders } from './phone-plans.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PlanCostService } from './plan-cost/plan-cost.service';

@Module({
  imports: [DatabaseModule],
  providers: [...phonePlansProviders, PhonePlansService, PlanCostService],
  controllers: [PhonePlansController],
})
export class PhonePlansModule {}
