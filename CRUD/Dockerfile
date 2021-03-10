FROM node
LABEL maintainer="Murilo Arvoredo Souto"
COPY . /CRUD
WORKDIR /CRUD/src
RUN npm install
ENTRYPOINT node server.js
EXPOSE 3333