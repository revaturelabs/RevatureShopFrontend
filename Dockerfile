FROM nginx
COPY /dist/RevatureShopFrontend /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf
