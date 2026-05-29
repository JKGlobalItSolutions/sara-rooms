import { Reveal } from "./Reveal.jsx";
import { Counter } from "./Counter.jsx";
import aboutImg from "../assets/about.jpg";

const stats = [
  { label: "Hour Service", value: 24, suffix: "/7" },
  { label: "Clean Rooms", value: 100, suffix: "%" },
  { label: "Happy Guests", value: 50, suffix: "+" },
  { label: "Days Open", value: 365, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal dir="left">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            About us
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-foreground">
            A peaceful retreat in the <span className="text-gold-gradient">temple town</span>
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Sara Rooms offers comfortable and family-friendly accommodations in
            Tiruvannamalai. Our rooms are designed to provide a peaceful and
            relaxing stay for temple visitors and travelers. Each room features
            modern amenities, mountain views, and a welcoming atmosphere.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur p-4 text-center hover-lift"
              >
                <div className="font-serif text-3xl font-bold text-gold-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal dir="right">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={aboutImg}
                alt="Arunachaleswarar Temple at golden hour"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card border border-border shadow-xl px-5 py-3">
              <div className="text-xs text-muted-foreground">Steps from</div>
              <div className="font-serif text-lg font-semibold text-primary">Arunachaleswarar Temple</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}