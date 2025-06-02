import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/CreateMedia.dto';
import { FilterMedia } from './dto/FilterMedia.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  async getAllMedia() {
    try {
      return await this.mediaService.findAllMedia();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async createMedia(@Body() mediaData: CreateMediaDto) {
    try {
      return await this.mediaService.createMedia(mediaData);
    } catch (error) {
      throw new HttpException('Error creating media', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('filter')
  async filterMedia(@Query() filter: FilterMedia) {
    try {
      return await this.mediaService.findMediaByFilter(filter);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post('filter')
  async filterMediaPost(@Body() filter: FilterMedia) {
    try {
      return await this.mediaService.findMediaByFilter(filter);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

}
