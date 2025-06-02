import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMediaTypeDto {
  @IsNotEmpty()
  @IsString()
  typeNme: string;
}
