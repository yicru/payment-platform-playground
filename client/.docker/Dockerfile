# syntax = docker/dockerfile:1

ARG BUN_VERSION=1.1.3
FROM oven/bun:${BUN_VERSION}-slim as base

WORKDIR /app

ENV NODE_ENV="production"


FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3

COPY --link bun.lockb package.json ./
RUN bun install --ci

COPY --link . .
RUN bun run build


FROM base

COPY --from=build /app /app

EXPOSE 3000
CMD [ "bunx", "serve", "-s", "build/client" ]
