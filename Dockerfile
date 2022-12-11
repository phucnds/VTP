FROM nginx:alpine

COPY ./build/web-mobile /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]