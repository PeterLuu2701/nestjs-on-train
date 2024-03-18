import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaClient, video } from '@prisma/client';

@Injectable()
export class VideoService {

  prisma = new PrismaClient

  create(createVideoDto: CreateVideoDto) {
    return 'This action adds a new video';
  }

  // localhost:8080/video
  async findAll(): Promise<video[]> {
    return await this.prisma.video.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
