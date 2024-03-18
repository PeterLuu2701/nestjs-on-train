import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from './entities/video.entity';
import { video } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

const upload = {
  storage: diskStorage({
    destination: process.cwd() + "/public/img",
    filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
  })
}

@UseGuards(AuthGuard('jwt'))
@ApiTags("Video")
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) { }

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }


  @Get()
  findAll(): Promise<video[]> {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.remove(+id);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({type: FileUploadDto})
  // yarn add @types/multer
  @UseInterceptors(FileInterceptor("upload", upload))
  @Post('/upload')
  upload(@UploadedFile() file: Express.Multer.File) {
    return file
  }
}
