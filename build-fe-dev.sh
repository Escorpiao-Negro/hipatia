#!/bin/bash

echo 
echo "Parando container do front-end"
echo
docker stop jornal_fe

echo
echo "Eliminando vestígios de containers"
echo
docker system prune -f
docker volume prune -f

echo 
echo "Removendo imagem do front-end"
echo
docker rmi jornal_fe:latest

echo "Salvando o diretório base do projeto"
BASEDIR=`pwd`

cd "$BASEDIR/fe"
echo
echo "Building in $PWD"
echo
npm run format
docker build -t jornal_fe .
docker run -d --name jornal_fe -p 3000:3000 jornal_fe:latest

exit 0
