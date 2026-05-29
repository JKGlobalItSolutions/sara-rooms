import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import r1 from "../assets/room1.png";
import r2 from "../assets/room2.png";
import r3 from "../assets/room3.png";
import r4 from "../assets/room4.png";
import r5 from "../assets/room5.png";
import r6 from "../assets/room6.png";

const images = [
  { src: r1, alt: "Cozy double bedroom with mountain view" },
  { src: r2, alt: "Family room with two beds" },
  { src: r4, alt: "Terrace with view of Arunachala" },
  { src: r5, alt: "Welcoming hotel lobby" },
  { src: r6, alt: "Single bed room with warm light" },
  { src: r3, alt: "Modern private bathroom" },
];

export function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Gallery
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            A glimpse of <span className="text-gold-gradient">Sara Rooms</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-shadow ${
                i === 0 || i === 4 ? "row-span-2 col-span-1 md:col-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close"
            >
              <X />
            </button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              src={images[open].src}
              alt={images[open].alt}
              className="max-h-[85vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}