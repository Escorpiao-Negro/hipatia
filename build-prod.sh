#!/bin/bash

echo 
echo "Parando containers do Docker"
echo
docker stop jornal_db 
docker stop jornal_api
docker stop jornal_fe

echo
echo "Eliminando vestígios de containers"
echo
docker system prune -f
docker volume prune -f

echo 
echo "Removendo imagens do Docker"
echo
docker rmi jornal_db:latest
docker rmi jornal_api:latest
docker rmi jornal_fe:latest

echo "Salvando o diretório base do projeto"
BASEDIR=`pwd`

cd "$BASEDIR/db"
echo
echo "Building in $PWD"
echo
docker build -f Dockerfile -t jornal_db .
docker run -d --name jornal_db jornal_db:latest

cd "$BASEDIR/api"
echo
echo "Building in $PWD"
echo
docker build -t jornal_api .
docker run -d --name jornal_api -p 3001:3000 jornal_api:latest

cd "$BASEDIR/fe"
echo
echo "Building in $PWD"
echo
docker build -f Dockerfile.prod -t jornal_fe .
docker run -d --name jornal_fe -p 3000:3000 jornal_fe:latest

exit 0
