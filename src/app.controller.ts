import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ApiBody, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

// entity
// DTO: Data Transfer Object

// DAO: Data Access Object
class userType {
  @ApiProperty()
  key: number 

  @ApiProperty()
  email: string

  @ApiProperty()
  userName: string

  @ApiProperty()
  phone: string
}

@ApiTags("App")
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //soA=1, soB=1 
  @ApiParam({name: "code"})
  @ApiQuery({name: "test"})
  @ApiBody({type: userType})
  @Post('/get-sum/:soA/:soB')
  getHello(@Param('soA') soA:string, @Param('soB') soB:string): number {
    return this.appService.getSum(Number(soA), Number(soB));
  }

  @Get('/demo/:id')
  demo(@Req() req: Request, @Param('id') id: string, @Query('id2') id2: string, @Query('hoTen') hoTen: string, @Body() body: userType) {
    // request
    // query params /123/abc
    // let {id} = req.params;
    // query string: ?id=123&hoTen=abc
    // let {id2} = req.query;
    // body(json)
    // let {id3} = req.body;

    let {key, email, userName, phone} = body;
    return {id, id2, key, email, userName, phone}
  }
}

// command used to create a module:
//  nest g resource video --no-spec

// nest g resource auth --no-spec

// connect to the database
// Step 1: yarn add prisma @prisma/client
// Step 2: yarn prisma init
// Step 3: update env and schema.prisma
// Step 4: yarn prisma db pull
// Step 5: yarn prisma generate 