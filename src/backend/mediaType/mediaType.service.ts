import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaTypeDto } from './dto/CreateMediaType.dto';

@Injectable()
export class MediaTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllMediaTypes() {
    const types = await this.prisma.mediaType.findMany({
      select: {
        typeId: true,
        typeNme: true,
        media: {
          select: {
            mediaId: true,
            mediaName: true,
          },
        },
      },
    });

    if (!types || types.length === 0) {
      throw new Error('No media types found');
    }

    return types;
  }

  async createMediaType(typeData: CreateMediaTypeDto) {
    const exists = await this.prisma.mediaType.findFirst({
      where: { typeNme: typeData.typeNme },
    });

    if (!exists) {
      return await this.prisma.mediaType.create({
        data: {
          typeNme: typeData.typeNme,
        },
      });
    }

    return {
      message: 'Media type already exists',
      typeNme: exists.typeNme,
    };
  }
}
