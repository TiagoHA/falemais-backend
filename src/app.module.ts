import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonePlansModule } from './phone-plans/phone-plans.module';
import { RateModule } from './rate/rate.module';
import { PriceReportModule } from './price-report/price-report.module';

@Module({
  imports: [PhonePlansModule, RateModule, PriceReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
