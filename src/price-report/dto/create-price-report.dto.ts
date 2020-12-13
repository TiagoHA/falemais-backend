import { IsInt, IsNotEmpty, IsString, IsUUID, Min } from 'class-validator';
import { PhonePlan } from 'src/phone-plans/entities/phone-plan.entity';
import { Rate } from 'src/rate/entities/rate.entity';

export class CreatePriceReportDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  minutesSpent: number;

  @IsNotEmpty()
  phonePlan: PhonePlan;

  @IsNotEmpty()
  rate: Rate;
}
