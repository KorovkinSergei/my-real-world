import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TegModule } from './teg/teg.module'

@Module({
  imports: [TegModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
