import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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

  async findAll(): Promise<PhonePlan[]> {
    const plans = await this.phonePlansRepository.find();

    return plans;
  }

  async findOne(id: string) {
    try {
      const plan = await this.phonePlansRepository.findOne(id);

      if (!plan) throw 'id not found';

      return plan;
    } catch (error) {
      throw new HttpException('No phone plan with this id found', HttpStatus.NOT_FOUND);
    }
  }

  // private async calcValuesPlan (plan: PhonePlan) {
  //   const finalPlan =
  // }

  async create(phonePlan: CreatePhonePlanDto) {
    const findedPlan = await this.phonePlansRepository.findOne({ name: phonePlan.name });

    if (findedPlan) {
      throw new HttpException('Phone plan name exists', HttpStatus.CONFLICT);
    }

    const plan = this.phonePlansRepository.create(phonePlan);
    return await this.phonePlansRepository.save(plan);
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
