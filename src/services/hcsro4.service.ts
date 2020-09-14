import { Injectable } from "@nestjs/common";
import { GpioService } from "./gpio.service";

@Injectable()
export class HCSRO4Service {
    constructor(private gpioService: GpioService) {
        this.gpioService.register(23, 'out'); // TRIG
        this.gpioService.register(24, 'in'); // ECHO
    }

    async read(): Promise<number> {
        let pulseStart = 0, pulseEnd = 0;

        this.gpioService.write(23, 0);
        await this.sleep(2000);
        this.gpioService.write(23, 1);
        await this.sleep(1)
        this.gpioService.write(23, 0);

        while(this.gpioService.read(24) == 0) {
            pulseStart = new Date().getTime() * 1000;
        }

        while(this.gpioService.read(24) == 1) {
            pulseEnd = new Date().getTime() * 1000;
        }

        const pulseDuration = pulseEnd - pulseStart;
        const distance = Math.round(pulseDuration * 17150);

        return distance;
    }

    sleep(miliseconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, miliseconds);
        });
    }
}