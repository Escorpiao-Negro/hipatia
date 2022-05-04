#!/bin/bash

echo 
echo "Parando containers do Docker"
echo
docker stop hipatia_db 
docker stop hipatia
docker stop phpmyadmin

echo
echo "Eliminando vestígios de containers"
echo
docker system prune -f
docker volume prune -f

echo 
echo "Removendo imagens do Docker"
echo
docker rmi hipatia_db:latest
docker rmi hipatia:latest

echo "Salvando o diretório base do projeto"
BASEDIR=`pwd`

cd "$BASEDIR/db"
echo
echo "Building in $PWD"
echo
docker build -t hipatia_db .
docker run -d --name hipatia_db -p 3306:3306 hipatia_db:latest

cd "$BASEDIR"
echo
echo "Building in $PWD"
echo
npm run format
docker build -t hipatia .
docker run -d --name hipatia -p 3000:3000 hipatia:latest

cd "$BASEDIR"
echo
echo "Running PHPMyAdmin"
docker run -d --name phpmyadmin -e ALLOW_ARBITRARY=1 -p 80:80 nazarpc/phpmyadmin:latest

exit 0
