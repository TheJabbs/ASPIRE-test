import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaDto } from './dto/CreateMedia.dto';
import { FilterMedia } from './dto/FilterMedia.dto';

@Injectable()
export class MediaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllMedia() {
    const media = await this.prisma.media.findMany({
      select: {
        mediaId: true,
        mediaName: true,
        description: true,
        released: true,
        mediaType: {
          select: {
            typeNme: true,
          },
        },
        creator: {
          select: {
            creatorName: true,
            dob: true,
          },
        },
        mediaStatus: {
          select: {
            mark: true,
            users: {
              select: {
                fullName: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!media || media.length === 0) {
      throw new Error('No media found');
    }

    return media;
  }

  async createMedia(mediaData: CreateMediaDto) {
    return await this.prisma.media.create({
      data: {
        mediaName: mediaData.mediaName,
        description: mediaData.description,
        creatorId: mediaData.creatorId,
        typeId: mediaData.typeId,
        released: mediaData.released || undefined,
      },
    });
  }

  async findMediaByFilter(filter: FilterMedia){
    const media = await this.prisma.media.findMany({
      where: {
        mediaName : filter.title || undefined,
        creator: {
          creatorName: filter.creator || undefined,
        },
        mediaType: {
          typeNme: filter.genre || undefined,
        },
        released: filter.releaseYear ? new Date(filter.releaseYear, 0, 1) : undefined,
      }
    })

    if (!media || media.length === 0) {
      throw new Error('No media found with the given filter');
    }
    return media;
  }


}
