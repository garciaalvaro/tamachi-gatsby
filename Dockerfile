FROM node:14

# Create the folder and change the working directory.
# Any command from now will run in this directory.
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install packages
RUN npm install

# Copy the other files and folders
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD npm run serve
