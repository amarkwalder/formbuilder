FROM node:lts-alpine

WORKDIR /app/

COPY bin ./bin/
COPY public ./public/
COPY routes ./routes/
COPY views ./views/
COPY models ./models/

COPY app.js ./
COPY package.json ./
COPY package-lock.json ./

RUN npm install

ENTRYPOINT [ "node", "/app/bin/www" ]