import { Calendar } from "lucide-react";

export function StickyBook() {
  return (
    <a
      href="#contact"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground shadow-2xl animate-glow-pulse hover:scale-105 transition"
      style={{ background: "var(--gradient-maroon)" }}
    >
      <Calendar className="h-4 w-4" />
      Book Now
    </a>
  );
}