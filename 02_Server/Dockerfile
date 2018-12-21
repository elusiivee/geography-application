FROM node:8.14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY app.js ./
COPY routers ./
COPY public ./
COPY model ./

RUN npm install

EXPOSE 4000
CMD [ "pwd" ]
CMD [ "ls -la" ]
ENTRYPOINT [ "node /usr/src/app/app.js" ]