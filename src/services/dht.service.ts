import { Injectable } from "@nestjs/common";

var sensor = require("node-dht-sensor");

@Injectable()
export class DhtService {
    read(pin: number): {temperature: number, humidity: number} {
        return sensor.read(11, pin, function (err, temperature, humidity) {
            if (!err) {
                return {
                    temperature,
                    humidity
                }
            } else {
                console.log(err);
            }
        });
    }
}