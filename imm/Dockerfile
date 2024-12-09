# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json ./
COPY ./package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the application port (change if necessary)
EXPOSE 3001

# Start the application with nodemon
CMD npm start