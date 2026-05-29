import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Car, Users, BellRing, Snowflake, Fan, Building2, Ban, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal.jsx";
import { RippleButton } from "./RippleButton.jsx";

const facilities = [
  { icon: Wifi, title: "Free WiFi", back: "Fast fiber internet in every room and common area." },
  { icon: Car, title: "Free Parking", back: "Spacious, secure on-site parking — no charges." },
  { icon: Users, title: "Family Rooms", back: "Roomy layouts perfect for families and groups." },
  { icon: BellRing, title: "Room Service", back: "Friendly assistance whenever you need it." },
  { icon: Snowflake, title: "Air Conditioning", back: "Stay cool with quiet, energy-efficient AC." },
  { icon: Fan, title: "Ceiling Fan", back: "Backup ceiling fans for breezy comfort." },
  { icon: Building2, title: "Open Terrace", back: "Sunset views of Arunachala from the terrace." },
  { icon: Ban, title: "Non-smoking", back: "Fresh, clean rooms — non-smoking property." },
];

const bars = [
  { label: "Cleanliness", value: 100 },
  { label: "Comfort", value: 95 },
  { label: "Service", value: 98 },
];

function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setW(value));
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="text-accent">{value}%</span>
      </div>
      <div className="mt-2 h-2.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width: `${w}%`, background: "var(--gradient-gold)" }}
        />
      </div>
    </div>
  );
}

function FacilityCard({ icon: Icon, title, back, idx }) {
  const [tip, setTip] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      whileHover={{ scale: 1.03 }}
    >
      <div
        className="flip-card h-44 relative"
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
      >
        <div className="flip-inner h-full">
          <div className="flip-face rounded-3xl bg-card border border-border p-5 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="animate-float">
              <div
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-primary animate-glow-pulse"
                style={{ background: "var(--cream)" }}
              >
                <Icon className="h-7 w-7" />
              </div>
            </div>
            <h4 className="mt-3 font-serif text-lg font-semibold">{title}</h4>
          </div>
          <div
            className="flip-face flip-back rounded-3xl p-5 flex items-center justify-center text-center text-primary-foreground shadow-lg"
            style={{ background: "var(--gradient-maroon)" }}
          >
            <p className="text-sm leading-relaxed">{back}</p>
          </div>
        </div>
        {tip && (
          <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-1 duration-200">
            <div className="relative rounded-lg bg-foreground px-3 py-1 text-xs font-medium text-background whitespace-nowrap shadow-lg">
              {title}
              <span className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Facilities() {
  return (
    <section id="facilities" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Facilities
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            Designed for your <span className="text-gold-gradient">comfort</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Hover the cards to flip and learn more.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <FacilityCard key={f.title} {...f} idx={i} />
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal dir="left" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold">Guest satisfaction</h3>
            <p className="mt-1 text-sm text-muted-foreground">Based on recent guest feedback.</p>
            <div className="mt-6 space-y-5">
              {bars.map((b) => <ProgressBar key={b.label} {...b} />)}
            </div>
          </Reveal>

          <Reveal dir="right">
            <div className="flex flex-wrap gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground animate-badge-pulse"
                style={{ background: "var(--gradient-maroon)" }}
              >
                <Sparkles className="h-4 w-4" /> Available Today
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-foreground border border-accent animate-gentle-shake"
                style={{ background: "var(--cream)" }}
              >
                Only 2 Rooms Left
              </span>
            </div>

            <div className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold">Reserve your stay</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Limited rooms left for this week. Book now to lock the best rate.
              </p>
              <RippleButton
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-xl transition"
                style={{ background: "var(--gradient-maroon)" }}
              >
                Check Availability
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}