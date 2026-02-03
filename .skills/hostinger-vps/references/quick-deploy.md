# Quick Deployment Reference

Fast reference for common Hostinger VPS deployment scenarios.

## 🚀 Standard Deployment (Most Common)

```bash
cd /opt/jinbeh-elite && git pull origin main && docker compose down && docker compose up -d --build
```

**Time:** ~3 minutes
**When to use:** After pushing commits to GitHub, routine updates

---

## 🔄 Force Sync Deployment

```bash
cd /opt/jinbeh-elite && git reset --hard origin/main && docker compose down && docker compose up -d --build
```

**Time:** ~3 minutes
**When to use:** Divergent branches error, local changes need to be discarded

---

## ⚡ Quick Restart (No Rebuild)

```bash
cd /opt/jinbeh-elite && docker compose restart
```

**Time:** ~10 seconds
**When to use:** Site down but no code changes, quick recovery needed

---

## 🔍 Status Check

```bash
cd /opt/jinbeh-elite && git status && docker ps
```

**Time:** Instant
**When to use:** Before deployment, checking current state

---

## 📋 View Recent Logs

```bash
cd /opt/jinbeh-elite && docker compose logs -f --tail=100
```

**When to use:** Debugging, monitoring after deployment

---

## 🆘 Emergency Rollback

```bash
# 1. Find last working commit
cd /opt/jinbeh-elite && git log --oneline -10

# 2. Rollback to specific commit
git reset --hard <commit-hash> && docker compose down && docker compose up -d --build
```

**When to use:** Bad deployment, need to revert to previous version

---

## ⚠️ Critical Reminders

- **Terminal tokens expire in 1-2 seconds** - Execute immediately or use manual access
- **Build takes 2-3 minutes** - Don't interrupt, wait for "Running 2/2"
- **Always commit first** - Push to GitHub before deploying to VPS
- **Use && to chain commands** - Ensures each step completes before next

---

## Decision Tree

```
Need to deploy?
├─ Have uncommitted changes?
│  ├─ Yes → Commit & push first
│  └─ No → Continue
│
├─ Local VPS changes to keep?
│  ├─ Yes → Standard deployment
│  └─ No → Force sync deployment
│
└─ Just need restart?
   ├─ Yes → Quick restart
   └─ No → Full deployment
```

---

## Terminal Access Workflow

```
1. Open hPanel: https://hpanel.hostinger.com/vps/1144987/overview
2. Click "Terminal" button (top right)
3. Wait for terminal tab to open (~2-3 seconds)
4. TYPE COMMAND IMMEDIATELY (token expires in 1-2 seconds)
5. Press Enter
6. If no response → Token expired → Open new terminal
```

**Pro Tip:** Copy command to clipboard BEFORE opening terminal for fastest execution.
