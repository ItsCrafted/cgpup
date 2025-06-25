FROM node:18-alpine

ENV NODE_ENV=production
WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN apk add --no-cache --upgrade python3 make g++
RUN npm install --omit=dev

COPY . .

EXPOSE 8080

CMD ["node", "src/index.js"]
