import { Injectable } from "@nestjs/common";
import { BinaryValue, Direction, Edge, Gpio, ValueCallback } from "onoff";

@Injectable()
export class GpioService {
    gpios: { pin: number, gpio: Gpio }[] = [];

    constructor() {
        // LED
        this.register(17, 'out');
        // Btn
        this.register(27, 'in', 'both');

        this.watch(27, (err, value) => {
            console.log("Watch called");
            if (err) {
                console.log(err);
            } else {
                this.write(17, value);
            }
        });
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

    watch(pin: number, callback: ValueCallback) {
        const gpio = this.gpios.find(gpio => gpio.pin == pin).gpio;
        gpio.watch(callback);
    }
}