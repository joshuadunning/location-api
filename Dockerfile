FROM --platform=linux/amd64 node:20
LABEL authors="josh"

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
