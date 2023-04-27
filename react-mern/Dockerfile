# Stage 1
FROM node:14

WORKDIR /app
COPY package.json .
# RUN npm install
COPY . .

# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

EXPOSE 8081
CMD ["npm", "run", "dev"]

# Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /react-mern/dist /usr/share/nginx/html

# CMD nginx -g 'daemon off;'