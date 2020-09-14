import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index.controller';
import { DhtService } from './services/dht.service';
import { GpioService } from './services/gpio.service';
import { HCSRO4Service } from './services/hcsro4.service';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [GpioService, DhtService, HCSRO4Service],
})
export class AppModule {}
