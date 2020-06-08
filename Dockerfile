FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY ./ormconfig.docker.json ./ormconfig.json

RUN npm run build

EXPOSE 1337

CMD [ "npm", "run", "start" ]
