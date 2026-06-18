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

# Copy built files from builder, setting ownership at copy time.
# Using `COPY --chown` writes each file into its layer already owned by the
# runtime user, which avoids a separate `RUN chown -R` step. That RUN step
# previously forced a full copy-up of the entire ~2.3GB public/.next tree into
# a new image layer, which made image export pathologically slow under a
# CPU/IO-throttled VPS (2026-06-18). `COPY --chown` keeps the runtime user able
# to write the ISR/prerender segment cache under .next/server/... without the
# duplicate layer. (Replaces the 2026-05-31 `chown -R` fix.)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Ensure the writable runtime cache dir exists and is owned by the runtime user.
RUN mkdir -p .next/cache && chown nextjs:nodejs .next .next/cache

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
