import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//module root
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static("."));

  const config = new DocumentBuilder().setTitle("Node 39").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(8080);
}
bootstrap();

// nodemon => yarn start:dev

// module : 3 properties
//module: connect controller and service of the object or other objects included module
//controller: create API
//service: execute the logic, features, calculations

// setup swagger
// yarn add @nestjs/swagger swagger-ui-express

// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt @nestjs/config