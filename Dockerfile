# Step 1: Use a Node.js base image
FROM node:18-alpine AS builder

# Step 2: Set working directory in container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the Next.js app (including Tailwind and TypeScript)
RUN npm run build

# Step 7: Create a production image
FROM node:18-alpine AS runner

# Step 8: Set working directory
WORKDIR /app

# Step 9: Copy built files from builder image
COPY --from=builder /app ./

# Step 10: Install only production dependencies
RUN npm install --production

# Step 11: Expose port 3000
EXPOSE 3000

# Step 12: Command to run the app in production mode
CMD ["npm", "start"]
