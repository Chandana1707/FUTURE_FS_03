import { Reveal } from "./motion-primitives";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const classes = [
  { time: "6:00 AM", name: "Morning HIIT", color: "bg-primary/20 text-primary border-primary/40" },
  { time: "7:00 AM", name: "Yoga Flow", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  { time: "6:00 PM", name: "CrossFit", color: "bg-amber-500/10 text-amber-400 border-amber-500/30" },
  { time: "7:00 PM", name: "Strength Training", color: "bg-sky-500/10 text-sky-400 border-sky-500/30" },
  { time: "8:00 PM", name: "Zumba", color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30" },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Schedule</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Weekly <span className="text-edge">Timetable</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-16 overflow-x-auto border border-border">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left p-4 font-display uppercase tracking-widest text-muted-foreground">Time</th>
                  {days.map((d) => (
                    <th key={d} className="text-left p-4 font-display uppercase tracking-widest text-muted-foreground">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {classes.map((c) => (
                  <tr key={c.time} className="border-b border-border last:border-0 hover:bg-card/60 transition-colors">
                    <td className="p-4 font-display text-lg whitespace-nowrap">{c.time}</td>
                    {days.map((d) => (
                      <td key={d} className="p-3">
                        <div className={`px-3 py-2 border text-xs uppercase tracking-wider ${c.color}`}>
                          {c.name}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
