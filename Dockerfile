FROM node:alpine  
WORKDIR /app
COPY package.json ./

COPY  ["package.json", "package-lock.json","./"]
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "dev"]