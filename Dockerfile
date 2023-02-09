# FROM node:16.13.2
# WORKDIR /app
# COPY package.json .
# RUN npm i --force
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]

FROM mhart/alpine-node:16 AS builder
WORKDIR /app
COPY . .
RUN npm i --force
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]