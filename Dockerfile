FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/package.json
RUN cd /usr/src/app && npm install

# Bundle app source
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 3000
ENV MONGODB_URI=mongodb://mongo/test
CMD ["npm", "start", ""]
