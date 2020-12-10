import { Test, TestingModule } from '@nestjs/testing';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';

describe('RateController', () => {
  let controller: RateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateController],
      providers: [RateService],
    }).compile();

    controller = module.get<RateController>(RateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
