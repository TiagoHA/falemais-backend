import { Module } from '@nestjs/common';
import { PriceReportService } from './price-report.service';
import { PriceReportController } from './price-report.controller';
import { priceReportProvider } from './price-report.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PlanCostService } from 'src/phone-plans/plan-cost/plan-cost.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PriceReportController],
  providers: [...priceReportProvider, PriceReportService, PlanCostService],
})
export class PriceReportModule {}
