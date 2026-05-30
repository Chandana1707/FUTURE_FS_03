import { Reveal } from "./motion-primitives";

const items = [
  { name: "Rohan T.", months: "8 months", img: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=900&q=80" },
  { name: "Meera J.", months: "6 months", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80" },
  { name: "Aditya N.", months: "12 months", img: "https://images.unsplash.com/photo-1583500178690-f7fd39b3c3d6?auto=format&fit=crop&w=900&q=80" },
  { name: "Kavya S.", months: "5 months", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80" },
  { name: "Rahul M.", months: "10 months", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80" },
  { name: "Sneha K.", months: "7 months", img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=900&q=80" },
];

export function Gallery() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Transformations</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Real Results. <span className="text-edge">Real People.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.06}>
              <div className="group relative aspect-[4/5] overflow-hidden">
                <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/20 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-display text-2xl">{it.name}</div>
                  <div className="text-xs uppercase tracking-widest text-primary">{it.months} of training</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
