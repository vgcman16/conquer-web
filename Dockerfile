FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS realm
WORKDIR /app
ENV NODE_ENV=production PORT=8787
COPY package*.json ./
RUN npm ci --omit=dev
COPY shared ./shared
COPY server ./server
COPY --from=build /app/dist ./dist
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8787/health || exit 1
CMD ["node", "server/index.js"]
