# Docker compose starter with postgres, adminer, nodejs and react

## Instructions:

At first build the images: docker-compose build

For development: docker-compose up -d

For production: docker-compose -f docker-compose.prod.yml up -d

### Web client

http://localhost:3000

### Backend api

http://localhost:8080

### Adminer:

http://localhost:8081

#### Credentials
db name, user, password are docker-compose.yml

host is name of the running postgres container

#### Possible problems:
if it is not possible to login try to restart containers with following command:
docker-compose up --force-recreate
