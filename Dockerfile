FROM node:18
EXPOSE 3000
RUN mkdir -p /feli
WORKDIR /feli
COPY . /feli
RUN npm install --omit=dev --no-progress
CMD ["npm", "start"]