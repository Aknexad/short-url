# -----------------------------
# 1. Builder stage
# -----------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install dependencies (include dev deps for build)
RUN npm ci

# Copy the rest of the project
COPY . .

# Generate Prisma client (needs schema.prisma + deps)
RUN npx prisma generate

# Build NestJS (dist folder)
RUN npm run build


# -----------------------------
# 2. Production stage
# -----------------------------
FROM node:22-alpine AS production

WORKDIR /app

# Copy only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy build output & Prisma client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

# Expose the port Nest listens on
EXPOSE 8080

# Start the app
CMD ["node", "dist/main.js"]
