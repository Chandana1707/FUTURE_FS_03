import { Dumbbell, Flame, Clock } from "lucide-react";
import { Reveal } from "./motion-primitives";

const stats = [
  { icon: Dumbbell, title: "Premium Equipment", text: "200+ machines & free weights" },
  { icon: Flame, title: "Expert Coaches", text: "Certified personal trainers" },
  { icon: Clock, title: "Open 24/7", text: "Train on your schedule" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">About IronEdge</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Where<br />
              <span className="text-edge">Champions</span><br />
              Are Built
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              IronEdge Fitness was founded in 2019 in the heart of Hyderabad with one mission —
              to build a community of disciplined, strong, unstoppable individuals. We combine
              cutting-edge equipment, science-backed training, and an unmatched coaching team to
              deliver real results.
            </p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.title} delay={0.15 + i * 0.08}>
                <div className="group p-5 bg-card border border-border hover:border-primary transition-colors h-full">
                  <s.icon className="w-7 h-7 text-primary mb-3" />
                  <div className="font-display text-lg">{s.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80"
                alt="IronEdge gym interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Jubilee Hills · Hyderabad</div>
                <div className="font-display text-2xl mt-1">12,000 sq ft of pure iron</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/40 -z-10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
