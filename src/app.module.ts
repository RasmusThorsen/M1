import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index.controller';
import { GpioService } from './services/gpio.service';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [GpioService],
})
export class AppModule {}
