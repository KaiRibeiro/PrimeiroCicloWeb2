FROM        node:latest
ENV         NODE_ENV=development
ENV         PORT=3000
COPY        . /app
WORKDIR     /app
RUN         npm install
EXPOSE      3000
ENTRYPOINT  ["npm", "start"]