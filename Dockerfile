# ---------- Build Stage ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files first (cache optimization)
COPY package.json package-lock.json ./

RUN npm ci

# Copy source code
COPY . .

# Build React app
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
