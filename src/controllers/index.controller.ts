import { Controller, Get, Render } from '@nestjs/common';
import { DhtService } from 'src/services/dht.service';
import { GpioService } from 'src/services/gpio.service';
import { HCSRO4Service } from 'src/services/hcsro4.service';

@Controller()
export class IndexController {
  constructor(private gpioService: GpioService, private dhtService: DhtService, private hcsro4Service: HCSRO4Service) {

  }

  @Get()
  @Render('index')
  async root() {
    const dht11 = this.dhtService.read(12);
    console.log(dht11.temperature);

    return {
        temp:dht11.temperature,
        hum: dht11.humidity
     };
  }
}
