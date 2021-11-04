import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CouresesController } from './courses.controller';

@Module({
  imports: [],
  controllers: [AppController, CouresesController],
  providers: [AppService],
})
export class AppModule {}
