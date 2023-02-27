FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install pnpm -g
RUN pnpm install
RUN pnpm run generate


ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["pnpm", "run", "preview-lite"]