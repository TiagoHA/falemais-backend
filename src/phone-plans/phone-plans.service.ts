import { Injectable } from '@nestjs/common';
import { CreatePhonePlanDto } from './dto/create-phone-plan.dto';
import { UpdatePhonePlanDto } from './dto/update-phone-plan.dto';

@Injectable()
export class PhonePlansService {
  create(createPhonePlanDto: CreatePhonePlanDto) {
    return 'This action adds a new phonePlan';
  }

  findAll() {
    return `This action returns all phonePlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phonePlan`;
  }

  update(id: number, updatePhonePlanDto: UpdatePhonePlanDto) {
    return `This action updates a #${id} phonePlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} phonePlan`;
  }
}
