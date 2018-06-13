FROM node:9.4.0
EXPOSE 3000
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
