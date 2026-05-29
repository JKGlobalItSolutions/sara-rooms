import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SunWidget } from "./SunWidget.jsx";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative pt-16 pb-8 text-primary-foreground"
      style={{ background: "var(--gradient-maroon)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-semibold">
              Sara <span className="text-gold-gradient">Rooms</span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/80 max-w-md">
              A peaceful, family-friendly stay near the Arunachaleswarar Temple
              in Tiruvannamalai — warm hospitality in a sacred town.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-foreground hover:scale-110 transition-all duration-300"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 max-w-md">
              <SunWidget />
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="story-link text-primary-foreground/80 hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#testimonials" className="story-link text-primary-foreground/80 hover:text-accent">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="story-link text-primary-foreground/80 hover:text-accent">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> 43/10B, Bypass, Tiruvannamalai District 606603</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 95971 24755</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> sararoomsoffl@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Sara Rooms. Crafted with warmth in Tiruvannamalai.
        </div>
      </div>
    </motion.footer>
  );
}