import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./motion-primitives";

const data = [
  {
    quote: "Lost 18kg in 5 months. The coaches here are genuinely invested in your progress.",
    name: "Rahul M.",
    type: "Pro Member",
  },
  {
    quote: "Best gym in Hyderabad. The environment is electric and the trainers are world class.",
    name: "Sneha K.",
    type: "Elite Member",
  },
  {
    quote: "IronEdge completely changed my lifestyle. Worth every rupee.",
    name: "Karthik P.",
    type: "Starter Member",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % data.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 bg-card/40 overflow-hidden">
      <div className="absolute inset-0 bg-slashes opacity-30" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Testimonials</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            What Our <span className="text-edge">Members</span> Say
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-16 relative min-h-[260px]">
            <Quote className="w-12 h-12 text-primary mx-auto opacity-60" />
            {data.map((d, idx) => (
              <div
                key={idx}
                className={`absolute inset-x-0 top-16 transition-opacity duration-700 ${
                  idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                  "{d.quote}"
                </p>
                <div className="mt-6 font-display text-lg">{d.name}</div>
                <div className="text-xs uppercase tracking-widest text-primary">{d.type}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-2">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-1.5 transition-all ${i === idx ? "w-10 bg-primary" : "w-4 bg-border"}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
