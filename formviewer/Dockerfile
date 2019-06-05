FROM node:lts-alpine AS build

WORKDIR /usr/src/

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY . .
RUN npm install

RUN npm install -g @angular/cli & ng build --prod --base-href=/formviewer/

###############################################################################

FROM nginx:latest

COPY --from=build /usr/src/dist/ /usr/share/nginx/html/formviewer/