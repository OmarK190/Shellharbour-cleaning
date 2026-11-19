FROM node:24-bookworm-slim
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY --chown=node:node . .
ARG GIT_COMMIT
ENV NODE_ENV=production \
    DEPLOY_ENV=production \
    GIT_COMMIT=${GIT_COMMIT}
RUN npm run build && chown -R node:node .next

USER node
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start", "--", "--hostname", "0.0.0.0"]
