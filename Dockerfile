FROM node:18
EXPOSE 3000
RUN mkdir -p /hatsu
WORKDIR /hatsu
COPY . /hatsu
RUN npm install --omit=dev --no-progress
CMD ["npm", "start"]