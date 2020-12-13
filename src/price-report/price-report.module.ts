import { Module } from '@nestjs/common';
import { PriceReportService } from './price-report.service';
import { PriceReportController } from './price-report.controller';
import { priceReportProvider } from './price-report.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PriceReportController],
  providers: [...priceReportProvider, PriceReportService],
})
export class PriceReportModule {}
