import { Instagram, Twitter, Youtube } from "lucide-react";
import { Reveal } from "./motion-primitives";

const trainers = [
  {
    name: "Arjun Reddy",
    role: "Strength & Powerlifting Coach",
    bio: "Former national-level powerlifter with 10+ years coaching elite athletes.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Sharma",
    role: "HIIT & Cardio Specialist",
    bio: "Turns sweat into results. Certified ACE coach focused on fat loss.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vikram Singh",
    role: "CrossFit & Functional Fitness",
    bio: "CrossFit L3, ex-army PT. Functional strength is his religion.",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ananya Rao",
    role: "Yoga & Wellness Expert",
    bio: "RYT-500 instructor blending vinyasa flow with athletic recovery.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Team</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Meet Your <span className="text-edge">Coaches</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="group bg-card border border-border hover:border-primary transition-all overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl">{t.name}</h3>
                  <div className="text-xs uppercase tracking-widest text-primary mt-1">{t.role}</div>
                  <p className="text-sm text-muted-foreground mt-3 flex-1">{t.bio}</p>
                  <div className="flex gap-3 mt-5 text-muted-foreground">
                    <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="w-4 h-4" /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="w-4 h-4" /></a>
                    <a href="#" aria-label="YouTube" className="hover:text-primary"><Youtube className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
