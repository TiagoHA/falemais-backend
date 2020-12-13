import { IsDecimal, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRateDto {
  @IsString()
  @IsNotEmpty()
  @Length(3)
  prefixOrigin: string;

  @IsString()
  @IsNotEmpty()
  @Length(3)
  prefixDestiny: string;

  @IsDecimal()
  @IsNotEmpty()
  price: number;
}
