FROM node:16-alpine AS node
RUN apk add --no-cache bash curl \
    && curl -o- -L https://yarnpkg.com/install.sh | bash \
    && export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

FROM node AS node-with-gyp
RUN apk add g++ make python3 \
    && curl -o- -L https://yarnpkg.com/install.sh | bash \
    && export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

FROM node-with-gyp AS builder
WORKDIR /squid
ADD package.json .
ADD yarn.lock .
# remove if needed
ADD assets assets
# remove if needed
ADD db db
# remove if needed
ADD schema.graphql .
RUN yarn install --frozen-lockfile
ADD tsconfig.json .
ADD src src
RUN yarn build

FROM node-with-gyp AS deps
WORKDIR /squid
ADD package.json .
ADD yarn.lock .
RUN yarn install --production --frozen-lockfile

FROM node AS squid
WORKDIR /squid
COPY --from=deps /squid/package.json .
COPY --from=deps /squid/yarn.lock .
COPY --from=deps /squid/node_modules node_modules
COPY --from=builder /squid/lib lib
# remove if no assets folder
COPY --from=builder /squid/assets assets
# remove if no db folder
COPY --from=builder /squid/db db
# remove if no schema.graphql is in the root
COPY --from=builder /squid/schema.graphql schema.graphql
# remove if no commands.json is in the root
ADD commands.json .
RUN echo -e "loglevel=silent\\nupdate-notifier=false" > /squid/.npmrc
RUN yarn global add @subsquid/commands && mv $(which squid-commands) /usr/local/bin/sqd
ENV PROCESSOR_PROMETHEUS_PORT 3000
