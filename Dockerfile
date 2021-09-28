FROM node:14.17.5 as build

WORKDIR /marvel
COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.19
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /marvel/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]