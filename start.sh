#!/bin/bash
set -e

cd ../

rm -rf ./vue-project-api

git clone https://github.com/klxq/vue-project-api.git

cd ./vue-project-api

docker build -t api .

docker_container=$(docker ps -aq --filter "name=vue-api")

# -n non-empty
# -z is empty
if [ -n "$docker_container" ]; then
  echo "Found existing container which has same name \"vue-api\": $docker_container"

  # stop api container
  docker stop $docker_container

  # delete old container
  docker rm $docker_container
fi

# run new container
docker run -d -p 27017:27017 -p 3000:3000 --name vue-api api

echo "Successfully started API server, you can access it with http://localhost:3000/films"
