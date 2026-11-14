FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json server.js ./
USER node
EXPOSE 3300
CMD ["node", "server.js"]
