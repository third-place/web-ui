FROM node:21.6.2-alpine3.18 AS build

ARG MODE="production"

WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN NODE_ENV=${MODE} pnpm build --mode ${MODE}

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
