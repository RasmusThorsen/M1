# Commands:
# sudo docker build -t milestone1 .
# sudo docker run -p 3000:3000 -d --privileged milestone1

# Image containing:
#   - arm32v6/node:apline
#   - NestJs cli
#   - Python (dependency of onoff)
#   - c++/make (dependency of onoff)
FROM rallethor/milestone1:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Run install.
RUN npm install 
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "nest", "start" ]