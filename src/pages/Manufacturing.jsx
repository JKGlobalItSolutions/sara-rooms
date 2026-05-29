import { Reveal } from "../components/Reveal.jsx";
import { motion } from "framer-motion";
import { Factory, Cog, Shield, Truck } from "lucide-react";

const capabilities = [
  { icon: Factory, title: "Production", desc: "State-of-the-art manufacturing facilities with quality control at every stage." },
  { icon: Cog, title: "Innovation", desc: "Continuous process improvement and adoption of latest technologies." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous testing and compliance with industry standards." },
  { icon: Truck, title: "Supply Chain", desc: "Efficient logistics network ensuring timely delivery across regions." },
];

export function Manufacturing() {
  return (
    <section className="relative py-32 sm:py-40 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Infrastructure
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            Built for <span className="text-gold-gradient">excellence</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our manufacturing infrastructure is designed for precision, scale, and reliability.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
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
                  <h3 className="mt-4 font-serif text-xl font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Manufacturing;