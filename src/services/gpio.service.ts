import { Injectable } from "@nestjs/common";
import { BinaryValue, Direction, Edge, Gpio } from "onoff";
import { from } from "rxjs";

@Injectable()
export class GpioService {
    gpios: {pin: number, gpio: Gpio}[] = [];
    
    constructor() {
        // LED
        this.register(17, 'out');
        // Btn
        this.register(27, 'in', 'both');

        this.write(17, 1);
    }

    register(pin: number, direction: Direction, edge?: Edge) {
        this.gpios.push({
            pin,
            gpio: new Gpio(pin, direction, edge)
        });
    }

    read(pin: number) {
        const gpio = this.gpios.find(gpio => gpio.pin == pin).gpio;

        return gpio.read();
    }

    write(pin: number, value: BinaryValue) {
        const gpio = this.gpios.find(gpio => gpio.pin == pin).gpio;

        gpio.write(value, (err) => console.log(err));
    }
}