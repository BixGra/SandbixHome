echo "docker build . -t home"

docker build . -t home

echo "docker compose up -d --remove-orphans"

docker compose up -d --remove-orphans

echo "system prune -a"

docker system prune -a