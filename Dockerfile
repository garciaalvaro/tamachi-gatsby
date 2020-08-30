FROM node:14.9-alpine

# Create app directory that will be the root directory of our project
RUN mkdir -p /app

# Change working directory, any command from now will run in this directory
WORKDIR /app

# Copy package.json
COPY ./package.json .

# Install packages
RUN npm install

# Copy the other files and folders
COPY . .

# Expose port
EXPOSE 3000

# Run the npm script which will:
# - Build the production files
# - Start the server
CMD [ "npm", "run", "serve" ]
