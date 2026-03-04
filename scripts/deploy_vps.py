import pexpect
import sys

print("Connecting to VPS via SSH...")
child = pexpect.spawn('ssh -o StrictHostKeyChecking=no root@72.61.15.71 "cd /opt/jinbeh-elite && git pull origin main && npm install && docker compose down 2>/dev/null || true && docker compose up -d --build"')
child.logfile = sys.stdout.buffer

try:
    idx = child.expect(['[Pp]assword:', pexpect.EOF, pexpect.TIMEOUT], timeout=10)
    if idx == 0:
        print("\nProviding password...")
        child.sendline('Brighter100?')
        child.expect(pexpect.EOF, timeout=None)
    elif idx == 1:
        print("\nEOF reached unexpectedly.")
    else:
        print("\nTimeout waiting for password prompt.")
except Exception as e:
    print(f"\nError: {e}")
