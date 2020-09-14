import { Injectable } from "@nestjs/common";
import { BinaryValue, Direction, Edge, Gpio, ValueCallback } from "onoff";

@Injectable()
export class GpioService {
    gpios: { pin: number, gpio: Gpio }[] = [];

    constructor() { }

    register(pin: number, direction: Direction, edge?: Edge) {
        this.gpios.push({
            pin,
            gpio: new Gpio(pin, direction, edge)
        });
    }

    read(pin: number) {
        const gpio = this.gpios.find(gpio => gpio.pin == pin).gpio;

        return gpio.readSync();
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