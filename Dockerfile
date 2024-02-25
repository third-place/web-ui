FROM node:21.6.2-alpine3.18 AS build
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
