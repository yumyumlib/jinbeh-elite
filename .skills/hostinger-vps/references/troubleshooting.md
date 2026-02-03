# Hostinger VPS Troubleshooting Guide

Common issues and their solutions when managing Jinbeh's Hostinger VPS.

## Terminal & Access Issues

### ❌ Problem: Terminal Commands Not Executing

**Symptoms:**
- Terminal window opens
- Can type commands
- Pressing Enter does nothing
- No response or feedback

**Root Cause:** Terminal token expired (1-2 second lifespan)

**Solution:**
1. Close expired terminal tab
2. Return to hPanel overview
3. Click Terminal button again
4. Have command ready in clipboard
5. Paste and execute IMMEDIATELY (< 2 seconds)

**Alternative:** Ask user to manually access terminal

---

### ❌ Problem: Multiple Terminal Tabs Opening

**Symptoms:**
- 2-3 terminal tabs open simultaneously
- All have different token URLs
- Commands don't work in any of them

**Root Cause:** Clicking Terminal button multiple times while waiting

**Solution:**
1. Close all terminal tabs
2. Wait 5 seconds
3. Click Terminal once
4. Use only the latest tab opened

---

## Git Issues

### ❌ Problem: "divergent branches" Error

**Full Error:**
```
hint: You have divergent branches and need to specify how to reconcile them.
fatal: Need to specify how to reconcile divergent branches.
```

**Root Cause:** Local VPS branch has different commit history than GitHub main

**Solution:**
```bash
cd /root/jinbeh-staging
git fetch origin
git reset --hard origin/main
```

**What this does:** Forces local to exactly match GitHub, discarding any local-only commits

**Safe?** Yes, if you've pushed all important changes to GitHub first

---

### ❌ Problem: Wrong Directory Error

**Symptoms:**
```
cd: no such file or directory: domains/staging.jinbeh.com/public_html
```

**Root Cause:** Using wrong directory path

**Solution:** Use correct path
```bash
cd /root/jinbeh-staging
```

**Remember:** Project is at `/root/jinbeh-staging`, NOT in `/domains/`

---

## Docker Issues

### ❌ Problem: Container Won't Start

**Check status:**
```bash
docker ps -a
docker compose ps
```

**View error logs:**
```bash
docker compose logs
```

**Common Solutions:**

**1. Port Already in Use:**
```bash
docker compose down
docker ps -a  # Check for zombie containers
docker rm -f <container-id>  # Remove any found
docker compose up -d
```

**2. Build Cache Issues:**
```bash
docker compose down
docker system prune -f
docker compose up -d --build
```

**3. Permission Issues:**
```bash
docker compose down
sudo docker compose up -d --build
```

---

### ❌ Problem: Old Code Still Running After Deploy

**Symptoms:**
- Deployed new code
- Changes don't appear on site
- Old version still visible

**Root Cause:** Docker using cached layers

**Solution 1 - Clear Cache:**
```bash
docker compose down
docker system prune -a -f
docker compose up -d --build
```

**Solution 2 - Force Rebuild:**
```bash
docker compose down -v  # Also removes volumes
docker compose up -d --build
```

**Solution 3 - Verify Git:**
```bash
cd /root/jinbeh-staging
git log -1  # Should show your latest commit
git pull origin main  # Make sure fully synced
```

---

### ❌ Problem: Build Fails or Hangs

**Symptoms:**
- Build starts but never completes
- Stuck at certain step
- Error during npm install or build

**Check:**
```bash
# View real-time logs
docker compose logs -f

# Check disk space
df -h

# Check memory
free -h
```

**Solutions:**

**1. Disk Space Full:**
```bash
docker system prune -a -f --volumes
```

**2. Memory Issues:**
```bash
docker compose down
# Wait a minute
docker compose up -d --build
```

**3. Network/npm Issues:**
```bash
docker compose down
rm -rf node_modules package-lock.json
docker compose up -d --build
```

---

## Site Issues

### ❌ Problem: Staging Site Not Loading

**Quick checks:**
1. **Container running?**
   ```bash
   docker ps
   ```
   Should show container with "Up" status

2. **Container logs show errors?**
   ```bash
   docker compose logs --tail=50
   ```

3. **Quick restart:**
   ```bash
   docker compose restart
   ```

4. **Full redeploy:**
   ```bash
   docker compose down && docker compose up -d --build
   ```

---

### ❌ Problem: 502 Bad Gateway

**Symptoms:** staging.jinbeh.com returns 502 error

**Common Causes:**
1. Container not running
2. Next.js app crashed
3. Port mapping issue

**Solution:**
```bash
# Check status
docker ps

# If not running
docker compose up -d

# If running but erroring
docker compose logs --tail=100

# Nuclear option
docker compose down && docker compose up -d --build
```

---

## Verification Issues

### ❌ Problem: Can't Tell If Deploy Worked

**Verification Checklist:**

1. **Check container status:**
   ```bash
   docker ps
   ```
   Look for: `Up X minutes` status

2. **Check recent logs:**
   ```bash
   docker compose logs --tail=20
   ```
   Should NOT show continuous errors

3. **Verify git commit:**
   ```bash
   git log -1 --oneline
   ```
   Should match your latest GitHub commit

4. **Test site loads:**
   - Open https://staging.jinbeh.com
   - Check browser dev tools console for errors
   - Verify your changes are visible

5. **Force refresh:**
   - Press Ctrl+Shift+R (or Cmd+Shift+R)
   - Clears browser cache
   - Shows actual latest version

---

## Build Time Issues

### ❌ Problem: Build Taking Too Long

**Normal Build Time:** 2-3 minutes (120-140 seconds)

**If longer than 5 minutes:**

1. **Check if actually building:**
   ```bash
   docker compose logs -f
   ```

2. **Look for progress indicators:**
   - "Building X.Xs (Y/18 FINISHED)" = good
   - No output for >1 minute = possibly hung

3. **If hung, restart:**
   ```bash
   # Ctrl+C if watching logs
   docker compose down
   docker compose up -d --build
   ```

---

## Permission Issues

### ❌ Problem: Permission Denied Errors

**Symptoms:**
```
permission denied
cannot access
```

**Solution:** Add `sudo` to docker commands
```bash
sudo docker compose down
sudo docker compose up -d --build
```

**Or:** Fix permissions
```bash
sudo chown -R $USER:$USER /root/jinbeh-staging
```

---

## Recovery Procedures

### Complete Reset (Nuclear Option)

**When to use:**
- Nothing else works
- Site completely broken
- Want fresh start

**Steps:**
```bash
# 1. Stop everything
docker compose down -v

# 2. Clean Docker
docker system prune -a -f --volumes

# 3. Reset to GitHub
cd /root/jinbeh-staging
git fetch origin
git reset --hard origin/main

# 4. Fresh build
docker compose up -d --build

# 5. Monitor
docker compose logs -f
```

**Time:** ~5 minutes
**Risk:** Low (syncs with GitHub)

---

## Getting Help

### Gather Debug Information

Before asking for help, collect:

```bash
# System info
uname -a
docker --version
docker compose version

# Git status
cd /root/jinbeh-staging
git status
git log -1

# Docker status
docker ps -a
docker compose ps

# Recent logs
docker compose logs --tail=100

# Disk space
df -h
```

### Common Questions to Answer

1. What command did you run?
2. What error message appeared?
3. When did it last work?
4. What changed since then?
5. Can you access the site?

---

## Prevention Best Practices

### Before Each Deployment

- [ ] Commit and push all changes to GitHub
- [ ] Verify GitHub shows latest commit
- [ ] Check VPS has enough disk space
- [ ] Note current working state
- [ ] Have rollback plan ready

### During Deployment

- [ ] Use tried-and-true commands
- [ ] Wait full 2-3 minutes for builds
- [ ] Watch for "Running 2/2" success message
- [ ] Don't interrupt docker builds

### After Deployment

- [ ] Verify site loads
- [ ] Check specific changes are visible
- [ ] Monitor logs for errors
- [ ] Test key functionality

---

**Remember:** Most issues are solved by:
1. Fresh terminal (token expired)
2. Force git sync (`git reset --hard origin/main`)
3. Clean docker rebuild (`docker compose down && docker compose up -d --build`)
4. Waiting full 2-3 minutes for build to complete
