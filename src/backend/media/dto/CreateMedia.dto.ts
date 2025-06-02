export class CreateMediaDto {
  mediaName: string;
  description: string;
  creatorId: number;
  typeId: number;
  released?: Date;
}
