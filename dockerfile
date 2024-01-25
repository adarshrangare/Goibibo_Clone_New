FROM node:20-alpine

WORKDIR /Goibibo_Clone_New/


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run", "dev"]