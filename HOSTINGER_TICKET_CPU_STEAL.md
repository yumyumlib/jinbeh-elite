# Hostinger Support Ticket — sustained high CPU steal on VPS srv1144987

**VPS:** srv1144987 — KVM2 (2 vCPU / 8 GB) — IP 72.61.15.71 — Ubuntu 24.04

## Summary
Our VPS is showing **sustained ~85–91% CPU "steal" time** at the hypervisor
level, with system load average climbing to 15–29 on a 2‑vCPU plan, while our
own guest processes use only ~10% CPU. This indicates the VM is being denied
physical CPU by the host — either a fair‑use CPU throttle or host
oversubscription / a noisy neighbor.

## Evidence
`top` header (repeated readings over ~1 hour):
```
%Cpu(s): 4.8 us, 5.0 sy, 0.0 ni, 0.0 id, 0.0 wa, 0.6 si, 89.3 st
%Cpu(s): 3.6 us, 7.1 sy, 0.0 id, 5.4 wa, 83.3 st
%Cpu(s): 4.8 us, 9.5 sy, 0.0 id, 85.7 st
steal sampled at 91.1% as recently as 2026-06-17 01:53 UTC
```
- `st` (steal) is consistently 83–91%.
- Guest user+system CPU is only ~8–12% — we are **not** the ones consuming the cores.
- Load average reached 28 while guest CPU stayed ~10%, i.e. processes are
  runnable but the hypervisor is not scheduling our vCPUs.

## What we already did on our side
- Found and fixed a runaway application process (an automation container stuck
  in a retry loop) that had been pegging a core; CPU demand from it dropped from
  ~100% of a core to ~2%.
- Stopped non‑essential containers and applied per‑container CPU limits to
  reduce total demand.
- **Steal % did not change after reducing our load**, which is why we believe
  this is host‑side, not guest‑side.

## Request
1. Please check whether this VPS is currently under a **fair‑use CPU throttle**,
   and if so, confirm the trigger and when it will reset (or reset it now that
   our load is back to normal).
2. Please verify the **health and CPU contention of the physical host** this VM
   resides on (noisy‑neighbor / oversubscription).
3. If neither applies, advise what is causing ~90% steal so we can address it.

Happy to provide any logs or run diagnostics you need. Thank you.
