import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PhonePlansModule } from './phone-plans/phone-plans.module';
import { RateModule } from './rate/rate.module';
import { PriceReportModule } from './price-report/price-report.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), PhonePlansModule, RateModule, PriceReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
