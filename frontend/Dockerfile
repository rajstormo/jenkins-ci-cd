FROM node:alpine
WORKDIR /frontend
COPY ./package.json .
COPY ./package-lock.json .
COPY . .
EXPOSE 5173
RUN npm install
CMD ["npm","run","host"]