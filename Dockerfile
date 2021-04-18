FROM node:15-alpine
ENV NODE_ENV=production

# Change working directory, any command from now will run in this directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install packages
RUN npm install --force --production

# Copy the other files and folders
COPY . .

# Expose port
EXPOSE 3000

# Run the npm script which will:
# - Build the production files
# - Start the server
CMD npm run build && npm run serve
