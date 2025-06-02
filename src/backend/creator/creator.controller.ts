import { Controller, Get, Post } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreateCreatorDto } from './dto/CreateCreator.dto';

@Controller('creator')
export class CreatorController {
  constructor(private readonly service: CreatorService) {}

  @Get()
  async findAllCreators() {
    return await this.service.findAllCreators();
  }

  @Post()
  async createCreator(creatorData: CreateCreatorDto) {
    return await this.service.createCreator(creatorData);
  }
}
