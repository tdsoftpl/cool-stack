FROM node:16
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY .platform ./.platform
COPY package.json schema.yaml ./
COPY extensions ./extensions

RUN yarn install --production

EXPOSE 8000
CMD [ "yarn", "start" ]

