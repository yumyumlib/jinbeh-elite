# Hostinger VPS Management Skill

Expert guide for managing Jinbeh's Hostinger VPS deployment, Docker operations, and terminal access.

## VPS Details

**Server:** Jinbeh Staging Environment
- **Location:** Boston (srv1144987.hstgr.cloud)
- **IP:** 72.61.15.71
- **OS:** Ubuntu 24.04.3 LTS
- **Control Panel:** https://hpanel.hostinger.com/vps/1144987/overview
- **Web Terminal:** Terminal button opens https://bos.hostingervps.com/

## Critical: Terminal Token Expiration

**IMPORTANT:** Hostinger web terminal tokens expire within 1-2 seconds when accessed via browser automation.

### Symptoms:
- Terminal window opens but doesn't accept commands
- Typed commands appear but don't execute
- No response after pressing Enter

### Solutions:
1. **Manual Access (Recommended):** Have user open terminal and run commands directly
2. **Immediate Execution:** Type and execute command within 1-2 seconds of terminal opening
3. **Alternative:** Use SSH directly if available

### Terminal Access Pattern:
```
1. Navigate to https://hpanel.hostinger.com/vps/1144987/overview
2. Click "Terminal" button (top right)
3. New tab opens with unique token URL
4. Token expires in ~1-2 seconds
5. Must type/execute immediately or token becomes invalid
```

## Directory Structure

### Project Location
```
/opt/jinbeh-elite/          # Main project directory (NOT /domains/...)
├── .git/                       # Git repository
├── src/                        # Next.js source code
├── public/                     # Static assets
├── docker-compose.yml          # Docker config
├── Dockerfile                  # Container build instructions
└── package.json                # Dependencies
```

**Common Mistake:** Trying to use `/root/jinbeh-staging/` or `/domains/staging.jinbeh.com/public_html/` - these paths don't exist. The correct path is `/opt/jinbeh-elite/`.

## Standard Deployment Workflow

### 1. Check Current Status
```bash
cd /opt/jinbeh-elite
git status
docker ps
```

### 2. Pull Latest Code
```bash
cd /opt/jinbeh-elite
git pull origin main
```

**If divergent branches error:**
```bash
git fetch origin
git reset --hard origin/main
```

### 3. Deploy with Docker
```bash
docker compose down && docker compose up -d --build
```

**Expected behavior:**
- Build time: ~120-140 seconds
- Steps: 18/18
- Key phases:
  - `npm ci` - Install dependencies
  - `npm run build` - Build Next.js (~70s)
  - Export and copy artifacts (~20s)
- Final output: `Container "jinbeh-elite" Started`
- Status: `Running 2/2`

### Docker Build Output Example
```
[+] Building 136.1s (18/18) FINISHED
 => [builder 4/6] RUN npm ci
 => [builder 6/6] RUN npm run build                72.7s
 => [runner 3/7] RUN addgroup --system --gid 1001 nodejs
 => [runner 7/7] COPY --from=builder /app/.next/static
 => exporting layers                               22.0s
[+] Running 2/2
 ✔ Container jinbeh-elite  Started
```

## Common Operations

### View Logs
```bash
cd /opt/jinbeh-elite
docker compose logs -f --tail=100
```

### Restart Without Rebuild
```bash
docker compose restart
```

### Check Container Status
```bash
docker ps
docker compose ps
```

### Force Clean Rebuild
```bash
docker compose down -v
docker compose up -d --build
```

## Git Operations

### Check Current Branch and Commits
```bash
git branch
git log --oneline -5
git remote -v
```

### Sync with Remote
```bash
# Standard pull
git pull origin main

# Force sync (use when divergent)
git fetch origin
git reset --hard origin/main
```

### Verify Latest Commit
```bash
git log -1 --pretty=format:"%H - %s"
```

## Troubleshooting

### Issue: "divergent branches" Error
**Cause:** Local VPS branch history differs from GitHub
**Solution:**
```bash
git reset --hard origin/main
```

### Issue: Container Won't Start
**Check logs:**
```bash
docker compose logs
```

**Common fixes:**
```bash
# Port conflict
docker compose down
docker ps -a  # Check for other containers
docker compose up -d

# Permission issues
docker compose down
sudo docker compose up -d --build
```

### Issue: Terminal Commands Don't Execute
**Cause:** Token expired (see Terminal Token Expiration section)
**Solution:** Open fresh terminal and execute immediately

### Issue: Old Code Still Running
**Cause:** Docker cached layers
**Solution:**
```bash
docker compose down
docker system prune -f
docker compose up -d --build
```

## Deployment Checklist

Before deploying:
- [ ] All changes committed to GitHub
- [ ] Pushed to `origin/main`
- [ ] Reviewed changes with `git log` or GitHub
- [ ] Terminal access ready (know it expires quickly)

During deployment:
- [ ] Navigate to `/opt/jinbeh-elite`
- [ ] Pull latest: `git pull origin main`
- [ ] Build and deploy: `docker compose down && docker compose up -d --build`
- [ ] Wait 2-3 minutes for build
- [ ] Check status: `docker ps`

After deployment:
- [ ] Verify site loads: https://staging.jinbeh.com
- [ ] Check recent changes are visible
- [ ] Test key functionality
- [ ] Monitor logs if needed: `docker compose logs -f`

## Docker Compose Warnings (Safe to Ignore)

These warnings appear but don't affect functionality:
```
WARN[0000] the attribute `version` is obsolete
```

## Access URLs

- **hPanel Dashboard:** https://hpanel.hostinger.com/vps/1144987/overview
- **Staging Site:** https://staging.jinbeh.com
- **GitHub Repo:** https://github.com/yumyumlib/jinbeh-elite
- **Terminal:** Click "Terminal" button in hPanel (tokens expire quickly!)

## Best Practices

### 1. Use Manual Terminal Access
Given token expiration issues, always recommend user manually opens terminal for critical operations.

### 2. Commit Before Deploy
Never deploy uncommitted local changes. Always:
```bash
# Local machine
git add -A
git commit -m "Description"
git push origin main

# Then on VPS
cd /opt/jinbeh-elite
git pull origin main
docker compose down && docker compose up -d --build
```

### 3. Monitor Build Progress
Docker builds take 2-3 minutes. Don't assume failure too quickly. Watch for:
- "Building X.Xs (Y/18)" progress
- "Running 2/2" completion message

### 4. Use Sequential Commands
For git + docker operations, chain with `&&`:
```bash
git pull origin main && docker compose down && docker compose up -d --build
```

### 5. Keep Staging in Sync
After any production deployment, also deploy to staging to keep environments aligned.

## Emergency Procedures

### Site Down - Quick Recovery
```bash
cd /opt/jinbeh-elite
docker compose restart
```

### Broken Deployment - Rollback
```bash
cd /opt/jinbeh-elite
git log --oneline -5  # Find last working commit
git reset --hard <commit-hash>
docker compose down && docker compose up -d --build
```

### Complete Reset
```bash
cd /opt/jinbeh-elite
git fetch origin
git reset --hard origin/main
docker compose down -v
docker compose up -d --build
```

## Notes from Real Experience

Based on actual deployment sessions:

1. **Terminal tokens are extremely short-lived** - Plan for manual execution or immediate automation
2. **Build times are consistent** - 120-140 seconds for full rebuild
3. **Directory structure is simple** - Just `/opt/jinbeh-elite`, not complex subdirectories
4. **Git divergence happens** - Use `git reset --hard origin/main` confidently when needed
5. **Docker is reliable** - Once deployed, containers run stably

## Common Command Sequences

### Standard Deployment (Most Common)
```bash
cd /opt/jinbeh-elite && \
git pull origin main && \
docker compose down && \
docker compose up -d --build
```

### Force Sync + Deploy
```bash
cd /opt/jinbeh-elite && \
git fetch origin && \
git reset --hard origin/main && \
docker compose down && \
docker compose up -d --build
```

### Check Everything
```bash
cd /opt/jinbeh-elite && \
git status && \
git log -1 && \
docker ps && \
docker compose logs --tail=50
```

---

**Last Updated:** February 2026
**VPS Version:** Ubuntu 24.04 LTS
**Docker Compose:** v2.x (no version attribute needed)
