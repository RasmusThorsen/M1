import { Controller, Get, Render } from '@nestjs/common';
import { GpioService } from 'src/services/gpio.service';

@Controller()
export class IndexController {
  constructor(private gpioService: GpioService) {}

  @Get()
  @Render('index')
  async root() {

    this.gpioService.watch(27, (err, value) => {
      if(err) {
        console.log(err);
      } else {
        this.gpioService.write(17, value);
      }
    });

    return {
        message: "hello world",
        function: () => console.log("hello")
     };
  }
}
