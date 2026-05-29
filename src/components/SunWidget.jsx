import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sunrise, Sunset, Cloud } from "lucide-react";

// Tiruvannamalai approx coords
const LAT = 12.2253;
const LNG = 79.0747;

function fmt(iso) {
  try {
    return new Date(iso).toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return "—";
  }
}

export function SunWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LNG}&daily=sunrise,sunset&current=temperature_2m&timezone=auto`,
    )
      .then((r) => r.json())
      .then((j) => {
        if (cancelled) return;
        setData({
          sunrise: j?.daily?.sunrise?.[0],
          sunset: j?.daily?.sunset?.[0],
          temp: j?.current?.temperature_2m,
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-4"
    >
      <h4 className="font-serif text-lg font-semibold mb-3">
        Today in <span className="text-accent">Tiruvannamalai</span>
      </h4>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ y: [0, -3, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Sunrise className="h-4 w-4 text-[oklch(0.27_0.04_40)]" />
          </motion.span>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-primary-foreground/70">
              Sunrise
            </div>
            <div className="font-medium tabular-nums">
              {data ? fmt(data.sunrise) : "—"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ y: [0, 3, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(135deg, oklch(0.55 0.16 40), oklch(0.45 0.14 30))" }}
          >
            <Sunset className="h-4 w-4 text-primary-foreground" />
          </motion.span>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-primary-foreground/70">
              Sunset
            </div>
            <div className="font-medium tabular-nums">
              {data ? fmt(data.sunset) : "—"}
            </div>
          </div>
        </div>
      </div>
      {data?.temp != null && (
        <div className="mt-3 flex items-center gap-2 text-xs text-primary-foreground/85">
          <Cloud className="h-3.5 w-3.5 text-accent" />
          <span>Now {Math.round(data.temp)}°C · perfect for Girivalam</span>
        </div>
      )}
    </motion.div>
  );
}