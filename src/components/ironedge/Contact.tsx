import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./motion-primitives";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("We'll be in touch within 24 hours.", {
        description: "Welcome to the IronEdge family.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  const inputCls =
    "w-full bg-card border border-border focus:border-primary outline-none px-4 py-3 text-sm transition-colors";

  return (
    <section id="contact" className="relative py-28 bg-card/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Get In Touch</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Find Us. <span className="text-edge">Join Us.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <form onSubmit={onSubmit} className="bg-card border border-border p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className={inputCls} />
                <input required type="tel" placeholder="Phone Number" className={inputCls} />
              </div>
              <input required type="email" placeholder="Email Address" className={inputCls} />
              <select required defaultValue="" className={inputCls}>
                <option value="" disabled>Your Goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>General Fitness</option>
                <option>Athletic Performance</option>
              </select>
              <textarea placeholder="Tell us a bit about you..." rows={4} className={inputCls} />
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground py-4 font-display uppercase tracking-widest transition-all"
              >
                {submitting ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Address", value: "Plot 45, Jubilee Hills,\nHyderabad, Telangana 500033" },
                  { icon: Phone, label: "Phone", value: "+91 98491 00123" },
                  { icon: Mail, label: "Email", value: "hello@ironedgefitness.in" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 5am–11pm\nSun: 6am–9pm" },
                ].map((c) => (
                  <div key={c.label} className="p-5 bg-card border border-border hover:border-primary transition-colors">
                    <c.icon className="w-5 h-5 text-primary" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{c.label}</div>
                    <div className="text-sm mt-1 whitespace-pre-line">{c.value}</div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border border-border">
                <iframe
                  title="IronEdge Hyderabad Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.4000%2C17.4200%2C78.4400%2C17.4400&layer=mapnik&marker=17.4300%2C78.4200"
                  className="w-full h-full grayscale contrast-125 invert"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
