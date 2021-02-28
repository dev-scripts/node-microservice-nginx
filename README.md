# Runnng identitical node microservice with nginx loadbalancer

1. `git clone git@github.com:bhandariprakash/dockerize-elasticsearch.git`
2. go to project folder.
3. Create node app image  `docker build -t node-app .` 
4. Run `docker-compose up` command
5. Open `http://localhost:8080/` in browser. This will open app in browser.