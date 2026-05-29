import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const testimonials = [
  {
    quote:
      "A truly peaceful retreat just steps from the temple. The mountain view at sunrise was unforgettable, and the family welcomed us like their own.",
    name: "Priya Ramanathan",
    role: "Girivalam devotee · Chennai",
  },
  {
    quote:
      "Spotless rooms, warm filter coffee in the morning, and the gentle hum of temple bells nearby. Sara Rooms feels like home in Tiruvannamalai.",
    name: "Arun Kishore",
    role: "Family traveller · Bengaluru",
  },
  {
    quote:
      "The hosts arranged everything for our full moon walk — torches, water, even a quiet space to rest after. Hospitality from the heart.",
    name: "Meera Iyer",
    role: "Spiritual seeker · Mumbai",
  },
  {
    quote:
      "Cozy, clean, affordable, and so close to Arunachaleswarar. We will stay nowhere else when we visit Tiruvannamalai again.",
    name: "David & Anna",
    role: "Visitors · United Kingdom",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setI((p) => (p + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const go = (d) => {
    setDir(d);
    setI((p) => (p + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-medium">
            Guest Stories
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-primary">
            Words from our <span className="text-gold-gradient">cherished guests</span>
          </h2>
        </Reveal>

        <div className="relative mt-12 min-h-[260px] sm:min-h-[220px]">
          <Quote
            className="absolute left-1/2 -translate-x-1/2 -top-4 h-10 w-10 text-accent/40"
            aria-hidden
          />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 sm:px-12"
            >
              <p
                className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed text-foreground/90"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center justify-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-3">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {t.role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => {
                  setDir(k > i ? 1 : -1);
                  setI(k);
                }}
                aria-label={`Go to testimonial ${k + 1}`}
                className={`h-2 rounded-full transition-all ${
                  k === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-accent"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}