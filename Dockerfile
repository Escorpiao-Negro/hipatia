FROM node:17.6.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install npm -g

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]