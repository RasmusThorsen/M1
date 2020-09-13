import { Controller, Get, Render } from '@nestjs/common';
import { GpioService } from 'src/services/gpio.service';

@Controller()
export class IndexController {
  constructor(private gpioService: GpioService) {}

  @Get()
  @Render('index')
  async root() {

    return {
        message: "hello world",
        function: () => console.log("hello")
     };
  }
}
