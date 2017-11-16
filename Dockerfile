FROM node:9

RUN mkdir /app

ADD package.json /app/package.json
RUN cd /app && npm install

ADD . /app
WORKDIR /app

ENV NODE_ENV production
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]
