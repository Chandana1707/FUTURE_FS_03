import { Check } from "lucide-react";
import { Reveal } from "./motion-primitives";

const plans = [
  {
    name: "Starter",
    price: "999",
    features: ["Full gym access", "Locker & shower", "1 group class / week", "Fitness assessment"],
    popular: false,
  },
  {
    name: "Pro",
    price: "1,999",
    features: ["Everything in Starter", "All group classes", "Nutrition guide", "2 PT sessions / month", "Body composition scan"],
    popular: true,
  },
  {
    name: "Elite",
    price: "3,499",
    features: ["Unlimited everything", "Dedicated personal trainer", "Custom diet plan", "Priority class booking", "Recovery & spa access"],
    popular: false,
  },
];

export function Plans() {
  return (
    <section id="plans" className="relative py-28 bg-card/40">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Memberships</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Pick Your <span className="text-edge">Plan</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative h-full p-8 bg-card border transition-all flex flex-col ${
                  p.popular
                    ? "border-primary red-glow md:-translate-y-4"
                    : "border-border hover:border-primary/60"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1 font-display">
                    Most Popular
                  </div>
                )}
                <div className="font-display text-2xl uppercase tracking-widest">{p.name}</div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl text-muted-foreground">₹</span>
                  <span className="font-display text-6xl">{p.price}</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block text-center py-3 font-display uppercase tracking-widest transition-all ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-foreground/30 hover:border-primary hover:text-primary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
