import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCreatorDto } from './dto/CreateCreator.dto';

@Injectable()
export class CreatorService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllCreators() {
    const creator = await this.prisma.creator.findMany({
      select: {
        creatorId: true,
        creatorName: true,
        dob: true,
        media: {
          select: {
            mediaId: true,
            mediaName: true,
            typeId: {
              select: {
                typeNme: true,
              },
            },
            description: true,
            released: true,
          },
        },
      },
    });

    if (!creator) {
      throw new Error('No creators found');
    }

    return creator;
  }

  async createCreator(creatorData: CreateCreatorDto) {
    const checkName = await this.prisma.creator.findFirst({
      where: {
        creatorName: creatorData.creatorName,
      },
    });

    if (!checkName) {
      return await this.prisma.creator.create({
        data: {
          creatorName: creatorData.creatorName,
          dob: creatorData.dob,
        },
      });
    }

    return {
      message: 'Creator already exists',
      creatorName: checkName.creatorName,
    }
  }
}