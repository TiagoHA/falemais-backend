import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { PHONE_PLANS_REPOSITORY } from 'src/database/database.constants';
import { Repository } from 'typeorm';
import { CreatePhonePlanDto } from './dto/create-phone-plan.dto';
import { UpdatePhonePlanDto } from './dto/update-phone-plan.dto';
import { PhonePlan } from './entities/phone-plan.entity';

@Injectable()
export class PhonePlansService {
  constructor(
    @Inject(PHONE_PLANS_REPOSITORY)
    private phonePlansRepository: Repository<PhonePlan>,
  ) {}

  async create(phonePlan: CreatePhonePlanDto) {
    const findedPlan = await this.phonePlansRepository.findOne({ name: phonePlan.name });

    if (findedPlan) {
      throw new HttpException('Phone plan name exists', HttpStatus.CONFLICT);
    }

    const plan = this.phonePlansRepository.create(phonePlan);
    return await this.phonePlansRepository.save(plan);
  }

  async findAll(): Promise<PhonePlan[]> {
    return await this.phonePlansRepository.find();
  }

  async findOne(id: string) {
    try {
      const plan = await this.phonePlansRepository.findOne(id);

      if (!plan) throw error;

      return plan;
    } catch (error) {
      throw new HttpException('No phone plan with this id found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, phonePlan: UpdatePhonePlanDto) {
    const plan = await this.findOne(id);
    await this.phonePlansRepository.update(id, phonePlan);
    return { ...plan, ...phonePlan };
  }

  async remove(id: string) {
    const plan = await this.findOne(id);
    await this.phonePlansRepository.delete(id);
    return plan;
  }
}
