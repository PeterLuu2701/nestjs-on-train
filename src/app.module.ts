import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [VideoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})


export class AppModule {}

// localhost:8080/demo
// decorator