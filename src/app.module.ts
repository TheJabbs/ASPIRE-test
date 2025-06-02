import { Module } from '@nestjs/common';
import { PrismaModule } from './backend/prisma/prisma.module';
import { CreatorModule } from './backend/creator/creator.module';

@Module({
  imports: [PrismaModule, CreatorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
