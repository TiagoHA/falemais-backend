import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhonePlansService } from './phone-plans.service';
import { PhonePlansController } from './phone-plans.controller';
import { PhonePlan } from './entities/phone-plan.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PhonePlan])],
  controllers: [PhonePlansController],
  providers: [PhonePlansService],
})
export class PhonePlansModule {}
