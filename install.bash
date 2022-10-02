# this script installs tilt and sets up development context for docker

# ensure kubernetes is enabled in docker desktop before running this 
kubectl config use-context docker-desktop &&

# windows install
switch to powershell
powershell &&
iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.ps1'))
tilt version
exit

# linux install
# curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash

# install postgres so we can use psql
# https://www.postgresql.org/download/
# https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

# install && build for react deployments
cd ./frontend && npm i && npm run build && cd ../../ 

# start kubernetes cluster
./start-frontend.bash &&

# start react-app
./start-frontend.bash