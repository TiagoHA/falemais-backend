import { Test, TestingModule } from '@nestjs/testing';
import { PlanCostService } from './plan-cost.service';

describe('PlanCostService', () => {
  let service: PlanCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanCostService],
    }).compile();

    service = module.get<PlanCostService>(PlanCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
