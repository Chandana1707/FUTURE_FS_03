import { Instagram, Youtube, Facebook } from "lucide-react";

const quick = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "trainers", label: "Trainers" },
  { id: "plans", label: "Plans" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-2 font-display text-3xl">
            <span className="inline-block w-2 h-7 bg-primary -skew-x-12" />
            IRON<span className="text-edge">EDGE</span>
          </div>
          <p className="mt-4 font-display text-xl text-muted-foreground">Forge Your Limits.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Quick Links</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {quick.map((q) => (
              <button key={q.id} onClick={() => go(q.id)} className="text-sm hover:text-primary transition-colors">
                {q.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Follow</div>
          <div className="flex gap-3">
            {[Instagram, Youtube, Facebook].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 inline-flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <div>© 2025 IronEdge Fitness, Hyderabad. All Rights Reserved.</div>
        <div>Crafted in Telangana · Built to push limits.</div>
      </div>
    </footer>
  );
}
