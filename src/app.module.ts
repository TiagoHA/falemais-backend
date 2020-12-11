import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonePlansModule } from './phone-plans/phone-plans.module';
import { RateModule } from './rate/rate.module';
import { PriceReportModule } from './price-report/price-report.module';
import { typeOrmConfig } from './configs/typeorm.configs';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PhonePlansModule, RateModule, PriceReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
