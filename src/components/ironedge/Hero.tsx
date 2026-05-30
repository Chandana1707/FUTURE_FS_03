import { motion } from "framer-motion";
import { Counter } from "./motion-primitives";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-slashes opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Hyderabad · Est. 2019</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] tracking-tight">
            IRON<span className="text-edge">EDGE</span>
            <br />
            <span className="text-stroke">FITNESS</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-xl font-light">
            Forge Your Limits. <span className="text-foreground font-medium">Own Your Strength.</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#plans"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-display text-lg uppercase tracking-widest transition-all hover:translate-y-[-2px] red-glow"
            >
              Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#plans"
              className="inline-flex items-center gap-2 border border-foreground/30 hover:border-primary hover:text-primary px-8 py-4 font-display text-lg uppercase tracking-widest transition-colors"
            >
              View Plans
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative border-t border-border bg-background/60 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: 2000, s: "+", l: "Members" },
            { n: 50, s: "+", l: "Classes" },
            { n: 15, s: "", l: "Expert Trainers" },
            { n: 6, s: "", l: "Years Strong" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <div className="font-display text-4xl md:text-5xl text-foreground">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
