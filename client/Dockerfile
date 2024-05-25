# Etapa de construcción
FROM node:14 AS build

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copiar los archivos estáticos construidos desde la etapa de construcción
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Exponer el puerto que usará Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]