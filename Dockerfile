FROM node:21-alpine3.18
COPY server.js .
CMD ["node", "server.js"]