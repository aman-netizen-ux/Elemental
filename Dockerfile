FROM node

RUN npm install

ENTRYPOINT [ "npm", "run","dev" ]