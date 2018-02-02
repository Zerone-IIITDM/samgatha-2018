FROM node:carbon
LABEL MAINTAINER Pranay Ankit Tiru <pranayankit414@gmail.com>

# Create app directory
WORKDIR /usr/src/app

# Install server side dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
