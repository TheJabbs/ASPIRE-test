import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})