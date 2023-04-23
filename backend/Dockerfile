FROM node:alpine
WORKDIR /backend
COPY package*.json ./
COPY . .
EXPOSE 4000
RUN npm install
CMD ["npm","start"]