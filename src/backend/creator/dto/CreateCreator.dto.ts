import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateCreatorDto {
  @IsNotEmpty()
  @IsString()
  creatorName: string;

  @IsNotEmpty()
  @IsDate()
  dob: Date;
}