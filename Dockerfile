FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/package.json
RUN cd /usr/src/app && npm install

# Bundle app source
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 8080
ENV MONGODB_URI=mongodb://mongo:27017/test
RUN npm run build
