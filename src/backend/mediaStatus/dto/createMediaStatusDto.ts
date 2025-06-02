import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateMediaStatusDto {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  mediaId: number;

  @IsNotEmpty()
  @IsString()
  mark: string;
}