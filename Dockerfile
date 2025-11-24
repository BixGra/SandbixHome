# Builder

FROM node:24-alpine AS builder

RUN npm install -g serve --prefix /usr/local/serve

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --verbose

COPY . .

RUN npm run build

# Production

FROM node:24-alpine AS production

RUN npm i -g serve

WORKDIR /usr/src/app

COPY --from=builder /app/dist .

EXPOSE 3000

CMD ["serve", "-s", "."]