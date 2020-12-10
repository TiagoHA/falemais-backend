import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceReportDto } from './create-price-report.dto';

export class UpdatePriceReportDto extends PartialType(CreatePriceReportDto) {}
