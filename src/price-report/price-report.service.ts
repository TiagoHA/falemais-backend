import { Injectable } from '@nestjs/common';
import { CreatePriceReportDto } from './dto/create-price-report.dto';
import { UpdatePriceReportDto } from './dto/update-price-report.dto';

@Injectable()
export class PriceReportService {
  create(createPriceReportDto: CreatePriceReportDto) {
    return 'This action adds a new priceReport';
  }

  findAll() {
    return `This action returns all priceReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceReport`;
  }

  update(id: number, updatePriceReportDto: UpdatePriceReportDto) {
    return `This action updates a #${id} priceReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceReport`;
  }
}
