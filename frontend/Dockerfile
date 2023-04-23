FROM node:alpine
WORKDIR /my-app
COPY ./package.json .
COPY ./package-lock.json .
COPY . .
EXPOSE 5173
RUN npm install
CMD ["npm","run","host"]