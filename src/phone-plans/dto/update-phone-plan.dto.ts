import { PartialType } from '@nestjs/mapped-types';
import { CreatePhonePlanDto } from './create-phone-plan.dto';

export class UpdatePhonePlanDto extends PartialType(CreatePhonePlanDto) {}
