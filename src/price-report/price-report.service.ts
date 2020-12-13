import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PRICE_REPORT_REPOSITORY } from 'src/database/database.constants';
import { PlanCostService } from 'src/phone-plans/plan-cost/plan-cost.service';
import { Repository } from 'typeorm';
import { CreatePriceReportDto } from './dto/create-price-report.dto';
import { UpdatePriceReportDto } from './dto/update-price-report.dto';
import { PriceReport } from './entities/price-report.entity';

@Injectable()
export class PriceReportService {
  constructor(
    @Inject(PRICE_REPORT_REPOSITORY)
    private priceReportRepository: Repository<PriceReport>,
    private planCostService: PlanCostService,
  ) {}

  async findAll() {
    const reports = await this.priceReportRepository.find();

    const reportsWithPlansValue = this.planCostService.finalPriceArr(reports);
    return reportsWithPlansValue;
  }

  async findOne(id: string) {
    try {
      const report = await this.priceReportRepository.findOne(id);

      if (!report) throw 'id not found';

      const reportWithPlansValue = this.planCostService.finalPrice(report);
      return reportWithPlansValue;
    } catch (error) {
      throw new HttpException('No price report with this id found', HttpStatus.NOT_FOUND);
    }
  }

  async create(priceReport: CreatePriceReportDto) {
    try {
      const report = await this.priceReportRepository.create(priceReport);
      return await this.priceReportRepository.save(report);
    } catch (error) {
      throw new HttpException('rate id or phoneplan id sent dont match', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, priceReport: UpdatePriceReportDto) {
    const report = await this.findOne(id);
    await this.priceReportRepository.update(id, report);
    return { ...report, ...priceReport };
  }

  async remove(id: string) {
    const report = await this.findOne(id);
    await this.priceReportRepository.delete(id);
    return report;
  }
}
