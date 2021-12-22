FROM node:17-alpine 

WORKDIR /app  

COPY package.json ./ 
COPY yarn.lock ./ 

RUN yarn 

ENV PORT=3002 
EXPOSE 3002 


CMD ["yarn", "dev"] 