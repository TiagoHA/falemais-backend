import { Module } from '@nestjs/common';
import { PriceReportService } from './price-report.service';
import { PriceReportController } from './price-report.controller';

@Module({
  controllers: [PriceReportController],
  providers: [PriceReportService]
})
export class PriceReportModule {}
