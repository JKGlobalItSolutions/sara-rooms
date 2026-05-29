import { motion } from "framer-motion";
import { Phone, Calendar, Sparkles } from "lucide-react";
import heroImg from "../assets/hero.png";
import { Particles } from "./Particles.jsx";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sara Rooms with Arunachala hill at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Floating glowing lights */}
      <Particles count={22} />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[25%] h-24 w-24 rounded-full bg-accent/30 blur-3xl animate-float" />
        <div className="absolute right-[15%] top-[40%] h-32 w-32 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-[40%] bottom-[20%] h-28 w-28 rounded-full bg-accent/25 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium text-white"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Boutique stay in Tiruvannamalai
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-3xl font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white"
        >
          Welcome to{" "}
          <span className="text-gold-gradient">Sara Rooms</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-5 max-w-xl text-lg text-white/85"
        >
          Comfortable stay near Arunachaleswarar Temple — peaceful rooms,
          warm hospitality, and breathtaking mountain views.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-[0_0_40px_oklch(0.78_0.14_80/0.6)] hover:-translate-y-0.5"
            style={{ background: "var(--gradient-maroon)" }}
          >
            <Calendar className="h-4 w-4" />
            Book Now
          </a>
          <a
            href="9597124755"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest"
        >
          SCROLL ↓
        </motion.div>
      </div>
    </section>
  );
}