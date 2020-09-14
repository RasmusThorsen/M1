import { Injectable } from "@nestjs/common";

var sensor = require("node-dht-sensor").promises;

export interface Dht11Reading {
    humidity: number,
    temperature: number
}

@Injectable()
export class DhtService {
    async read(pin: number): Promise<Dht11Reading> {
        return await sensor.read(11, pin);
    }
}