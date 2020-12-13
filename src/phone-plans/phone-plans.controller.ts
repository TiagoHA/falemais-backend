import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PhonePlansService } from './phone-plans.service';
import { CreatePhonePlanDto } from './dto/create-phone-plan.dto';
import { UpdatePhonePlanDto } from './dto/update-phone-plan.dto';

@Controller('phone-plans')
export class PhonePlansController {
  constructor(private readonly phonePlansService: PhonePlansService) {}

  @Post()
  create(@Body() createPhonePlanDto: CreatePhonePlanDto) {
    return this.phonePlansService.create(createPhonePlanDto);
  }

  @Get()
  findAll() {
    return this.phonePlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonePlansService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhonePlanDto: UpdatePhonePlanDto) {
    return this.phonePlansService.update(id, updatePhonePlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonePlansService.remove(id);
  }
}
