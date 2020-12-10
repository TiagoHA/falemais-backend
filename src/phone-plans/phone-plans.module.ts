import { Module } from '@nestjs/common';
import { PhonePlansService } from './phone-plans.service';
import { PhonePlansController } from './phone-plans.controller';

@Module({
  controllers: [PhonePlansController],
  providers: [PhonePlansService]
})
export class PhonePlansModule {}
