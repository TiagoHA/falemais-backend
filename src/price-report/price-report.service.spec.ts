import { Test, TestingModule } from '@nestjs/testing';
import { PriceReportService } from './price-report.service';

describe('PriceReportService', () => {
  let service: PriceReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceReportService],
    }).compile();

    service = module.get<PriceReportService>(PriceReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
