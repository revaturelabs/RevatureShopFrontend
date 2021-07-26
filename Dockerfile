FROM node AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN ng build --prod

FROM nginx
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/RevatureShopFrontend /usr/share/nginx/html



