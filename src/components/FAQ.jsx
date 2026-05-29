import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const faqs = [
  {
    q: "How close are you to Arunachaleswarar Temple?",
    a: "Sara Rooms is a short 5–7 minute walk from the East Gopuram of Arunachaleswarar Temple — perfect for early morning darshan and evening aarti.",
  },
  {
    q: "Do you arrange Girivalam (full moon walk) support?",
    a: "Yes. On Pournami nights we provide route guidance, complimentary drinking water, torches on request, and a quiet space to rest before and after the 14 km walk.",
  },
  {
    q: "Is the stay family and senior friendly?",
    a: "Absolutely. Our rooms are spacious, ground-floor options are available, and the area is calm and safe for families, elders, and solo women travellers.",
  },
  {
    q: "What are check-in and check-out times?",
    a: "Standard check-in is 12:00 PM and check-out is 11:00 AM. Early check-in for sunrise darshan can be arranged on request, subject to availability.",
  },
  {
    q: "Do you offer parking and Wi-Fi?",
    a: "Yes — free on-site parking for cars and two-wheelers, plus complimentary high-speed Wi-Fi throughout the property.",
  },
  {
    q: "Can you help with temple visits, food and local sightseeing?",
    a: "Our hosts gladly recommend pure-veg restaurants, arrange auto/cab pickups, and share timings for Skandashram, Virupaksha Cave and Ramana Ashram.",
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0 px-3 sm:px-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left font-serif text-base sm:text-lg text-primary hover:no-underline py-5"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full mb-4"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
            >
              <ShieldCheck className="h-7 w-7 text-[oklch(0.27_0.04_40)]" />
            </motion.div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-medium">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-primary">
              Peace of <span className="text-gold-gradient">Mind</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Everything you need to know before your peaceful stay in Tiruvannamalai.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] p-2 sm:p-4"
        >
          <div className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}