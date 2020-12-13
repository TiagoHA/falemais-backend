import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PriceReportService } from './price-report.service';
import { CreatePriceReportDto } from './dto/create-price-report.dto';
import { UpdatePriceReportDto } from './dto/update-price-report.dto';

@Controller('price-report')
export class PriceReportController {
  constructor(private readonly priceReportService: PriceReportService) {}

  @Get()
  findAll() {
    return this.priceReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceReportService.findOne(id);
  }

  @Post()
  create(@Body() priceReport: CreatePriceReportDto) {
    return this.priceReportService.create(priceReport);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() priceReport: UpdatePriceReportDto) {
    return this.priceReportService.update(id, priceReport);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceReportService.remove(id);
  }
}
