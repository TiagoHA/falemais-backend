import { IsString, IsNotEmpty, IsInt, Min, MinLength, IsDecimal, IsOptional } from 'class-validator';

export class CreatePhonePlanDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  readonly minutes: number;

  @IsDecimal()
  @IsOptional()
  readonly initialCost: number;

  @IsDecimal()
  @IsOptional()
  readonly percentageAdditionalMinuteCost: number;
}
