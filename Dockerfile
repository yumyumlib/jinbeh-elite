# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Give the runtime user write access to the whole .next tree (not just
# .next/cache). Next.js writes runtime prerender/segment cache under
# .next/server/app/.../*.segments; without this the server logs
# "EACCES: permission denied, mkdir '/app/.next/server/...'" and ISR/
# dynamic pages fail to update their cache. (Fixed 2026-05-31.)
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
