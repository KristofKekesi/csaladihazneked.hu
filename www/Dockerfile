FROM node:18
- MAINTAINER kristofkekesi

RUN useradd -m runneruser
USER runneruser

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run start
HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1