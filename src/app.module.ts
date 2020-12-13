import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonePlansModule } from './phone-plans/phone-plans.module';
import { RateModule } from './rate/rate.module';
import { PriceReportModule } from './price-report/price-report.module';
import { typeOrmConfig } from './configs/typeorm.configs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PhonePlansModule, RateModule, PriceReportModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
