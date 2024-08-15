FROM node:20-alpine as base

# This ensure node_modules have all correct 
# libs, on all OS. (Prevent issues with ARM)
FROM base as build
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM base
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY . .