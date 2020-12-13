import { IsString, IsNotEmpty, IsInt, Min, MinLength, IsDecimal } from 'class-validator';

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
  @IsNotEmpty()
  readonly price: number;
}
