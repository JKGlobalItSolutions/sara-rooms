import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, X } from "lucide-react";

// Approximate next full moon using lunar cycle (29.530588853 days)
// Reference full moon: 2026-04-01 12:51 UTC
const SYNODIC_MS = 29.530588853 * 24 * 60 * 60 * 1000;
const REF_FULL_MOON = new Date("2026-04-01T12:51:00Z").getTime();

function nextFullMoon(now) {
  const diff = now - REF_FULL_MOON;
  const cycles = Math.ceil(diff / SYNODIC_MS);
  return REF_FULL_MOON + cycles * SYNODIC_MS;
}

function format(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  return { days, hours, mins, secs };
}

export function MoonCountdown() {
  const [open, setOpen] = useState(true);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = nextFullMoon(now);
  const { days, hours, mins, secs } = format(target - now);
  const targetDate = new Date(target).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[60] text-primary-foreground"
          style={{ background: "var(--gradient-maroon)" }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm">
            <motion.span
              animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
            >
              <Moon className="h-4 w-4 text-[oklch(0.27_0.04_40)]" />
            </motion.span>
            <span className="hidden sm:inline font-serif italic text-accent">
              Girivalam Full Moon
            </span>
            <span className="opacity-90">in</span>
            <div className="flex items-center gap-1.5 font-mono">
              {[
                { v: days, l: "d" },
                { v: hours, l: "h" },
                { v: mins, l: "m" },
                { v: secs, l: "s" },
              ].map((u) => (
                <motion.span
                  key={u.l}
                  className="inline-flex items-baseline gap-0.5 rounded-md bg-white/10 px-1.5 py-0.5 backdrop-blur"
                >
                  <span className="font-semibold tabular-nums">
                    {String(u.v).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-accent">{u.l}</span>
                </motion.span>
              ))}
            </div>
            <span className="hidden md:inline opacity-80">· {targetDate}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Dismiss"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/15 transition"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}