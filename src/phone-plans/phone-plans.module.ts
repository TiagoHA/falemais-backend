import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhonePlansService } from './phone-plans.service';
import { PhonePlansController } from './phone-plans.controller';
import { PhonePlan } from './entities/phone-plan.entity';
import { phonePlansProviders } from './phone-plans.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  // imports: [TypeOrmModule.forFeature([PhonePlan])],
  imports: [DatabaseModule],
  providers: [...phonePlansProviders, PhonePlansService],
  controllers: [PhonePlansController],
})
export class PhonePlansModule {}
