# Frengee Vehicles

## Dependencies to run the project:

- [Docker Engine](https://docs.docker.com/engine/install/)
- (Optional) [NodeJS 20](https://nodejs.org/en/download/package-manager) 

> For development proposes you should have Node JS 20.x installed, this will guarantee auto complete and lint on code, but in case you just want run the source code, you can only install docker engine.

## How run:

- (Optional) Install all dependencies with `npm install`
- Run `docker compose up` on the root folder. To prevent see logs from MongoDB, you can run with `docker compose up --attach app`, this will ensure only attach to app logs.
