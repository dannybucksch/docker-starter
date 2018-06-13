FROM node:8.10.0-alpine
EXPOSE 8080 9229
WORKDIR /home/app
COPY . /home/app
RUN npm install
CMD ./scripts/start.sh
