import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RATE_REPOSITORY } from 'src/database/database.constants';
import { Repository } from 'typeorm';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';

@Injectable()
export class RateService {
  constructor(
    @Inject(RATE_REPOSITORY)
    private rateRepository: Repository<Rate>,
  ) {}

  async findAll(): Promise<Rate[]> {
    return this.rateRepository.find();
  }

  async findOne(id: string): Promise<Rate> {
    try {
      const rate = await this.rateRepository.findOne(id);

      if (!rate) throw 'id not found';

      return rate;
    } catch (error) {
      throw new HttpException('No rate with this id found', HttpStatus.NOT_FOUND);
    }
  }

  async create(rate: CreateRateDto): Promise<Rate> {
    const plan = this.rateRepository.create(rate);
    return await this.rateRepository.save(plan);
  }

  async update(id: string, rate: UpdateRateDto) {
    const plan = await this.findOne(id);
    await this.rateRepository.update(id, rate);
    return { ...plan, ...rate };
  }

  async remove(id: string): Promise<Rate> {
    const plan = await this.findOne(id);
    await this.rateRepository.delete(id);
    return plan;
  }
}
