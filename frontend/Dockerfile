# Use an official Node.js image as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json (if present) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /frontend

# Build the React app
RUN npm run build

# Expose port 80 to the outside
EXPOSE 80

# Command to run the application
CMD ["npx", "serve", "-s", "-l", "80", "build"]