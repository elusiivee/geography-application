#!/usr/bin/env bash
mongoimport --db geographydb --collection questions --file /docker-entrypoint-initdb.d/data.json --jsonArray