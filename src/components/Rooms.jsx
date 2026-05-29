import { Wifi, Car, Users, BellRing, Snowflake, Clock, Mountain, Bath, Tv } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Wifi, title: "Free WiFi", desc: "High-speed internet across the property." },
  { icon: Car, title: "Free Parking", desc: "Secure on-site parking for all guests." },
  { icon: Users, title: "Family Rooms", desc: "Spacious rooms perfect for families." },
  { icon: BellRing, title: "Room Service", desc: "Friendly service whenever you need." },
  { icon: Snowflake, title: "Air Conditioning", desc: "Stay cool and comfortable all day." },
  { icon: Clock, title: "24-Hour Front Desk", desc: "Always available to assist you." },
  { icon: Mountain, title: "Mountain View", desc: "Wake up to Arunachala hill views." },
  { icon: Bath, title: "Private Bathroom", desc: "Clean, modern bathrooms in every room." },
  { icon: Tv, title: "Flat-Screen TV", desc: "Entertainment for your downtime." },
];

export function Rooms() {
  return (
    <section id="rooms" className="relative py-24 sm:py-32" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Rooms & Comfort
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            Everything you need for a <span className="text-gold-gradient">restful stay</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Thoughtful amenities designed for a peaceful, comfortable experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div className="relative">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary shadow-sm group-hover:animate-glow-pulse"
                    style={{ background: "var(--cream)" }}
                  >
                    <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{it.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}