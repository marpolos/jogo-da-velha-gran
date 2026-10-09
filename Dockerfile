FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

COPY jogoDaVelha.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]