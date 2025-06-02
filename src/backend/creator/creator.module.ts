import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';

@Module({
  imports: [],
  controllers: [CreatorController],
  providers: [CreatorService],
  exports: [],
})
export class CreatorModule {}