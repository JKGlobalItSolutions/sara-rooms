import { Reveal } from "../components/Reveal.jsx";
import { motion } from "framer-motion";

const brandLogos = [
  { name: "Sara Rooms", tagline: "Boutique stays in temple town" },
  { name: "Sara Hospitality", tagline: "Warmth you can feel" },
  { name: "Sara Retreats", tagline: "Escape to peace" },
];

export function Brands() {
  return (
    <section className="relative py-32 sm:py-40 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Our Brands
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            Built on <span className="text-gold-gradient">trust & comfort</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each brand under Sonachala Hospitalities promises a unique experience rooted in care.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center hover-lift"
            >
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
                style={{ background: "var(--gradient-gold)" }}
              />
              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-primary shadow-sm" style={{ background: "var(--cream)" }}>
                  <span className="font-serif text-2xl font-bold text-gold-gradient">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{brand.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{brand.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;