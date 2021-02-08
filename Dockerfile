FROM node
MAINTAINER Rodney Martins
COPY . /var/www
WORKDIR /var/www
RUN yarn
ENTRYPOINT yarn start
EXPOSE 5000