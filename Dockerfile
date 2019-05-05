FROM node:alpine

RUN mkdir -p /usr/src/app
#RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY /app/package.json /usr/src/app/package.json
RUN npm install --production --silent 
RUN npm install react-scripts -g --silent
