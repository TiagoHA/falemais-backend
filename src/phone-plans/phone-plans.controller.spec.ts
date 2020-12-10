import { Test, TestingModule } from '@nestjs/testing';
import { PhonePlansController } from './phone-plans.controller';
import { PhonePlansService } from './phone-plans.service';

describe('PhonePlansController', () => {
  let controller: PhonePlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonePlansController],
      providers: [PhonePlansService],
    }).compile();

    controller = module.get<PhonePlansController>(PhonePlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
