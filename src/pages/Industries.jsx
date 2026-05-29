import { Reveal } from "../components/Reveal.jsx";
import { motion } from "framer-motion";
import { Building2, Hotel, Tent, Home } from "lucide-react";

const sectors = [
  { icon: Hotel, title: "Hospitality", desc: "Comfortable accommodations for pilgrims and tourists visiting Tiruvannamalai." },
  { icon: Building2, title: "Real Estate", desc: "Prime properties developed with thoughtful design and community focus." },
  { icon: Tent, title: "Tourism", desc: "Curated spiritual tours and Girivalam support for full moon experiences." },
  { icon: Home, title: "Homestays", desc: "Warm, family-run homestays that make every guest feel at home." },
];

export function Industries() {
  return (
    <section className="relative py-32 sm:py-40 min-h-screen flex items-center" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Industries
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            Serving <span className="text-gold-gradient">diverse sectors</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sonachala Hospitalities operates across multiple industries with excellence.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary shadow-sm" style={{ background: "var(--cream)" }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;