import { Test, TestingModule } from '@nestjs/testing';
import { PriceReportController } from './price-report.controller';
import { PriceReportService } from './price-report.service';

describe('PriceReportController', () => {
  let controller: PriceReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceReportController],
      providers: [PriceReportService],
    }).compile();

    controller = module.get<PriceReportController>(PriceReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
