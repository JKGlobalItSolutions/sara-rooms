import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  checkIn: z.string().min(1, "Select a check-in date"),
  checkOut: z.string().min(1, "Select a check-out date"),
  message: z.string().trim().max(500).optional(),
});

const PHONE = "95971 24755";
const WA_NUMBER = "95971 24755";

export function Contact() {
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      checkIn: String(fd.get("checkIn") || ""),
      checkOut: String(fd.get("checkOut") || ""),
      message: String(fd.get("message") || ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErrors({});
    const text = `Booking Enquiry%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0ACheck-in: ${data.checkIn}%0ACheck-out: ${data.checkOut}%0AMessage: ${encodeURIComponent(data.message || "")}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const fieldClasses = (key) =>
    `w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_4px_oklch(0.78_0.14_80/0.18)] ${
      errors[key] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Book your stay
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold">
            Reserve a <span className="text-gold-gradient">peaceful stay</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send us your details and we'll confirm your booking right away.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <Reveal dir="left" className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className={`rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm ${shake ? "animate-shake-error" : ""}`}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Full name</label>
                  <input name="name" placeholder="Your name" className={`mt-1.5 ${fieldClasses("name")}`} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Phone</label>
                  <input name="phone" type="tel" placeholder="+91 ..." className={`mt-1.5 ${fieldClasses("phone")}`} />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Check-in</label>
                  <input name="checkIn" type="date" className={`mt-1.5 ${fieldClasses("checkIn")}`} />
                  {errors.checkIn && <p className="mt-1 text-xs text-destructive">{errors.checkIn}</p>}
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/80">Check-out</label>
                  <input name="checkOut" type="date" className={`mt-1.5 ${fieldClasses("checkOut")}`} />
                  {errors.checkOut && <p className="mt-1 text-xs text-destructive">{errors.checkOut}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold text-foreground/80">Message (optional)</label>
                <textarea name="message" rows={4} placeholder="Anything we should know?" className={`mt-1.5 ${fieldClasses("message")} resize-none`} />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-xl hover:-translate-y-0.5 transition"
                  style={{ background: "var(--gradient-maroon)" }}
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-xl transition"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>

              {sent && (
                <p className="mt-4 text-sm text-accent-foreground bg-accent/30 rounded-xl px-4 py-2 animate-in fade-in">
                  Opening WhatsApp with your booking details…
                </p>
              )}
            </form>
          </Reveal>

          <Reveal dir="right" className="lg:col-span-2">
            <div
              className="rounded-3xl p-7 text-primary-foreground shadow-xl h-full"
              style={{ background: "var(--gradient-maroon)" }}
            >
              <h3 className="font-serif text-2xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                We respond within minutes during the day. Reach out any time.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-wider">Phone</div>
                  <a href={`tel:${PHONE}`} className="font-semibold hover:text-accent transition">{PHONE}</a>
                </div>
                <div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-wider">Email</div>
                  <a href="mailto:sararoomsoffl@gmail.com" className="font-semibold hover:text-accent transition">sararoomsoffl@gmail.com</a>
                </div>
                <div>
                  <div className="text-primary-foreground/70 text-xs uppercase tracking-wider">Address</div>
                  <div className="font-semibold">43/10B, Bypass, Tiruvannamalai District 606603</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}