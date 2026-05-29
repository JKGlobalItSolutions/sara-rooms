import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Moon, Sun, Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#facilities", label: "Facilities" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const isActive = (href) => hash === href;

  return (
    <header
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/sara-rooms/#home"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "home";
            }}
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-primary-foreground font-serif text-lg font-bold shadow-md group-hover:scale-110 transition"
              style={{ background: "var(--gradient-maroon)" }}
            >
              S
            </span>
            <span className="font-serif text-xl font-semibold">
              Sara <span className="text-gold-gradient">Rooms</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? "text-primary"
                    : "text-foreground/85 hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle night mode"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 hover:bg-secondary transition"
            >
              {dark ? <Sun className="h-4 w-4 text-accent" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="tel:+919999999999"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-md hover:shadow-lg transition"
              style={{ background: "var(--gradient-maroon)" }}
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="rounded-2xl border border-border bg-background/95 backdrop-blur p-4 shadow-lg">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive(l.href)
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}