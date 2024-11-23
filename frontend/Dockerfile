FROM node:16-alpine as builder
# Create the app directory
WORKDIR /app
# Copy app files
COPY . .
# Install the required dependencies
RUN npm ci
# Build the front end app
RUN npm run build
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as development
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start and run the nginx
CMD ["nginx", "-g", "daemon off;"]