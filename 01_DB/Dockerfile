FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME="admin"
ENV MONGO_INITDB_ROOT_PASSWORD="admin"
ENV MONGO_INITDB_DATABASE="geographydb"

ADD data.json /docker-entrypoint-initdb.d/
ADD setup-db.sh /docker-entrypoint-initdb.d/
RUN chmod 755 /docker-entrypoint-initdb.d/*.sh

EXPOSE 27017