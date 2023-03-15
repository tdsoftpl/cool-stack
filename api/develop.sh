#!/bin/bash

yarn run stop:local:db
yarn run start:local:db

echo "Waiting for the database to be ready ⏳"

# shellcheck disable=SC2046
while [ $(docker inspect --format "{{json .State.Health.Status }}" "coolstack_postgres") != "\"healthy\"" ];
do printf "💤"; sleep 1;
done

directus bootstrap && directus schema apply --yes ./schema.yaml
yarn run seed:local:db
open-cli http://0.0.0.0:8055
directus start
