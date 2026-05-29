import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

export function Location() {
  return (
    <section id="location" className="py-24 sm:py-32" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal dir="left">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Location
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
              Find us in <span className="text-gold-gradient">Tiruvannamalai</span>
            </h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Sara Rooms is conveniently located in Tiruvannamalai, providing easy
              access to the temple and the sacred Girivalam path.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <div className="relative">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground animate-pin-drop"
                    style={{ background: "var(--gradient-maroon)" }}
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <div className="font-semibold">Sara Rooms</div>
                  <div className="text-sm text-muted-foreground">Tiruvannamalai, Tamil Nadu, India</div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Arunachaleswarar+Temple+Tiruvannamalai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-xl transition hover:-translate-y-0.5"
              style={{ background: "var(--gradient-maroon)" }}
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </Reveal>

          <Reveal dir="right">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-border">
              <iframe
                title="Sara Rooms location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.5777985595023!2d79.0434569!3d12.2091055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacbfa7098d772d%3A0x53fcd557ad3736d8!2sSara%20Rooms!5e0!3m2!1sen!2sin!4v1779966100560!5m2!1sen!2sin"
                className="w-full h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}