import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/ironedge/Navbar";
import { Hero } from "@/components/ironedge/Hero";
import { About } from "@/components/ironedge/About";
import { Programs } from "@/components/ironedge/Programs";
import { Trainers } from "@/components/ironedge/Trainers";
import { Plans } from "@/components/ironedge/Plans";
import { Gallery } from "@/components/ironedge/Gallery";
import { Testimonials } from "@/components/ironedge/Testimonials";
import { Schedule } from "@/components/ironedge/Schedule";
import { Contact } from "@/components/ironedge/Contact";
import { Footer } from "@/components/ironedge/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronEdge Fitness — Hyderabad's Premium Gym | Forge Your Limits" },
      { name: "description", content: "IronEdge Fitness Hyderabad: premium strength, HIIT, CrossFit, yoga and personal training. 24/7 access, expert coaches, real results." },
      { property: "og:title", content: "IronEdge Fitness — Hyderabad" },
      { property: "og:description", content: "Forge your limits. Own your strength. Premium gym in Jubilee Hills, Hyderabad." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Plans />
        <Gallery />
        <Testimonials />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
