# Deploying jinbeh-elite (the easy way)

One image, one command. Staging (`staging.jinbeh.com`, port 3001) and production
(`jinbeh.com`, port 3002) are both defined in `docker-compose.yml` and share the
same built image. Prod lives under a `prod` compose profile so nothing runs it by
accident.

## Daily flow

```bash
# 1. Make your edits locally, commit, push
git add src/app/celebrations/world-cup/page.tsx   # (only the files you changed)
git commit -m "feat(world-cup): ..."
git push origin main

# 2. On the VPS, one command:
ssh root@72.61.15.71
cd /opt/jinbeh-elite
./deploy.sh                # deploys staging + LIVE jinbeh.com
# or
./deploy.sh staging        # staging only
```

That's it. New pages deploy exactly the same way — edit, commit, push, `./deploy.sh`.

## One-time cutover (do this once)

The live `jinbeh-prod` container was originally created by hand (outside compose),
so compose can't manage it until you replace it once.

```bash
cd /opt/jinbeh-elite
git pull origin main          # gets the new docker-compose.yml + deploy.sh

# Make sure /opt/jinbeh-elite/.env has ALL of these (the prod-only Google Sheets
# keys are what the standalone container carried that staging lacks):
#   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
#   DATABASE_URL, PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD
#   GOOGLE_SHEETS_CLIENT_EMAIL
#   GOOGLE_SHEETS_PRIVATE_KEY   <- single line, with \n escapes (the app un-escapes it)

chmod +x deploy.sh
docker rm -f jinbeh-prod       # remove the old hand-made container (jinbeh.com down ~30s)
./deploy.sh                    # compose now builds + runs staging AND prod
```

Tip to copy the Sheets keys out of the old container before you remove it:
```bash
docker inspect jinbeh-prod --format '{{range .Config.Env}}{{println .}}{{end}}' | grep GOOGLE_SHEETS
```
Paste those two values into `.env` (keep the private key on one line).

## Rollback

`deploy.sh` tags the previous live image before each deploy. To revert:

```bash
docker images | grep jinbeh-elite:rollback     # find the timestamp you want
docker tag jinbeh-elite:rollback-YYYYMMDD-HHMMSS jinbeh-elite:latest
docker compose --profile prod up -d
```

## Next step (optional, removes the SSH entirely)

Add a GitHub Actions workflow that runs `./deploy.sh` over SSH (using a deploy key
stored as a GitHub secret, not your root password) on every push to `main`. Then
shipping is just `git push` — no VPS login at all. Ask and I'll write it.
