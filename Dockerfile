FROM node:14-alpine3.14

WORKDIR /src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 4200

CMD [ "npm", "run", "dev" ]