# Этап 1: Сборка приложения  
FROM node:16-alpine as build  
WORKDIR /app  
COPY package.json package-lock.json ./  
RUN npm ci  
COPY . .  
RUN npm run build  
  
# Этап 2: Установка serve для запуска собранного приложения
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/build .
RUN npm install -g serve
CMD ["serve", "-s", ".", "-l", "80"]
EXPOSE 80