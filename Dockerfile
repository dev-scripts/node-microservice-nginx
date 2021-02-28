FROM node:14

WORKDIR /nodejs/app

COPY package*.json ./
RUN npm install

COPY . .
CMD [ "node", "index.js" ]