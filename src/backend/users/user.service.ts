import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers() {
    const users = await this.prisma.users.findMany({
      select: {
        userid: true,
        email: true,
        fullName: true,
        mediaStatus: {
          select: {
            mediaStatusId: true,
            status: true,
            mediaId: true,
          },
        },
      },
    });

    if (!users || users.length === 0) {
      throw new Error('No users found');
    }

    return users;
  }

  async createUser(userData: CreateUserDto) {
    const existingUser = await this.prisma.users.findFirst({
      where: { email: userData.email },
    });

    if (!existingUser) {
      return await this.prisma.users.create({
        data: {
          email: userData.email,
          password: userData.password,
          fullName: userData.fullName,
        },
      });
    }

    return {
      message: 'User with this email already exists',
      email: existingUser.email,
    };
  }

  async getSuggestedMediaForUser(userId: number) {
    // Step 1: Get mediaIds the current user has already interacted with
    const userMedia = await this.prisma.mediaStatus.findMany({
      where: {
        userId: userId,
      },
      select: {
        mediaId: true,
      },
    });

    const userMediaIds = userMedia.map(m => m.mediaId);

    // Step 2: Find other users who interacted with the same media
    const otherUsersMedia = await this.prisma.mediaStatus.findMany({
      where: {
        mediaId: { in: userMediaIds },
        userId: { not: userId },
      },
      select: {
        userId: true,
      },
      distinct: ['userId'],
    });

    const otherUserIds = otherUsersMedia.map(u => u.userId);

    if (otherUserIds.length === 0) return [];

    // Step 3: Find media those users interacted with, excluding media the current user has already seen
    const suggestedMedia = await this.prisma.mediaStatus.findMany({
      where: {
        userId: { in: otherUserIds },
        mediaId: { notIn: userMediaIds },
      },
      select: {
        media: {
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
              },
            },
          },
        },
      },
      distinct: ['mediaId'],
    });

    return suggestedMedia.map(entry => entry.media);
  }

}
