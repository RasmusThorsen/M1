# Milestone 1 

This repository contains the solution to the first milestone in Building the Internet of Things with P2P and Cloud Computing.
The solution is developed by group Bravo:
 - Alexander Rasmussen
 - Jakob Dybdahl
 - Casper Janerka
 - Rasmus Thorsen

 ## Stack
 The project is built using the nodejs-based framework NestJs, which allows for Typescript and Angular-inspired syntax.
 Furthermore Docker is used to build and deploy the solution.

 The Docker image is built by running:
 ```docker
 sudo docker build -t milestone1 .
 sudo docker run -p 3000:3000 -d --privileged milestone1
 ```
It might take a while to build the first time, likewise it takes a couple of seconds before the server is ready after the build is done.

 The image it self is based upon the image `rallethor:milestone1`, which contains:
  - arm32v6/node:apline
  - NestJs cli
  - Python (dependency of onoff)
  - c++/make (dependency of onoff)

  ## NPM
  The `arm32v6/node:alpine` has node installed, which allows access to NPM packages, besides NestJs, this project also utilizes:
  - onoff (GPIO access on RPI with types)
  - node-dht-sensor (Easy-to-use driver for the DHT11 sensor)

  ## Wiring
  The RPI is hooked up to the sensors, as shown in the milestone description, which means:
  - DHT11 -> GPIO 12
  - HCSRO4 -> GPIO 23 (TRIG) and GPIO 24 (ECHO)
  - LED -> GPIO 4