import { Test, TestingModule } from '@nestjs/testing';
import { PhonePlansService } from './phone-plans.service';

describe('PhonePlansService', () => {
  let service: PhonePlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonePlansService],
    }).compile();

    service = module.get<PhonePlansService>(PhonePlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
