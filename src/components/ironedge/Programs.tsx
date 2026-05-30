import { Dumbbell, Zap, Activity, User, Heart, Apple } from "lucide-react";
import { Reveal } from "./motion-primitives";

const programs = [
  { icon: Dumbbell, title: "Strength & Powerlifting", desc: "Build raw, functional strength" },
  { icon: Zap, title: "HIIT Cardio", desc: "Burn fat, boost stamina fast" },
  { icon: Activity, title: "CrossFit Classes", desc: "Push your limits every session" },
  { icon: User, title: "Personal Training", desc: "1-on-1 coaching for faster results" },
  { icon: Heart, title: "Yoga & Recovery", desc: "Restore, stretch, and recharge" },
  { icon: Apple, title: "Nutrition Coaching", desc: "Fuel your body the right way" },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28 bg-card/40">
      <div className="absolute inset-0 bg-slashes opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Programs</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-3xl">
            Train Like You <span className="text-edge">Mean It</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group relative h-full p-8 bg-card border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                <div className="text-6xl font-display text-border group-hover:text-primary/40 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p.icon className="w-8 h-8 text-primary mt-6" />
                <h3 className="font-display text-2xl mt-4">{p.title}</h3>
                <p className="text-muted-foreground mt-2">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
