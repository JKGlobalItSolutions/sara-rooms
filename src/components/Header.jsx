import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/brands", label: "Brands" },
  { path: "/products", label: "Products" },
  { path: "/industries", label: "Industries" },
  { path: "/amenities", label: "Amenities" },
  // { path: "/manufacturing", label: "Infrastructure" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/60 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg transition-transform duration-300 group-hover:scale-105">
            S
          </span>
          <span
            className={`font-display text-lg leading-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white drop-shadow"
            }`}
          >
            Sonachala
            <span className="block text-[10px] uppercase tracking-[0.3em] opacity-70">
              Hospitalities
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? scrolled
                      ? "text-primary bg-primary-soft/80"
                      : "text-white bg-white/15"
                    : scrolled
                      ? "text-foreground/70 hover:text-primary hover:bg-primary-soft/50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className={`pill-btn text-sm ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Enquire Now
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-full p-2.5 transition-colors ${
            scrolled
              ? "text-foreground hover:bg-primary-soft/50"
              : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-400 lg:hidden ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-display transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 pill-btn bg-primary text-primary-foreground text-lg px-10 py-4"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;