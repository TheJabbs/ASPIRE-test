import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaStatusDto } from './dto/createMediaStatusDto';

@Injectable()
export class MediaStatusService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllMediaStatuses() {
    const statuses = await this.prisma.mediaStatus.findMany({
      select: {
        mediaStatus: true,
        mark: true,
        media: {
          select: {
            mediaName: true,
          },
        },
        users: {
          select: {
            fullName: true,
            email: true,
          },
        },
      },
    });

    if (!statuses || statuses.length === 0) {
      throw new Error('No media statuses found');
    }

    return statuses;
  }

  async createMediaStatus(statusData: CreateMediaStatusDto) {
    return await this.prisma.mediaStatus.create({
      data: {
        userId: statusData.userId,
        mediaId: statusData.mediaId,
        mark: statusData.mark,
      },
    });
  }
}
