import { IsString, IsNotEmpty, IsNumber, IsInt, Min, MinLength } from 'class-validator';

export class CreatePhonePlanDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  readonly minutes: number;
}
