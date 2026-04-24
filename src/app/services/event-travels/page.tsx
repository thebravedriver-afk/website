import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Event Travels | Brave Driver Tours & Travels",
  description: "Corporate and personal event transport solutions. Reliable group travel for conferences, parties, and corporate functions.",
};

const highlights = [
  "Corporate conference transfers",
  "Team outings and group travel",
  "Personal parties and celebrations",
  "Exhibition and trade show transport",
  "Multi-stop event logistics",
  "On-demand fleet for large groups",
];

const packages = [
  { name: "Half Day (4 Hrs)", from: "₹1,300+", note: "Short event transfers" },
  { name: "Full Day (8 Hrs)", from: "₹2,000+", note: "All-day event coverage" },
  { name: "Group / Fleet", from: "Custom", note: "Bulk booking discounts available" },
];

export default function EventTravelsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,200,50,0.15),_transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-secondary-foreground" />
            </div>
            <span className="text-secondary font-black uppercase tracking-widest text-sm">Event Travels</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl">
            Corporate &amp; Personal <span className="text-secondary">Event Transport</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-10">
            Professional transport for every kind of event — from boardroom conferences to personal celebrations.
            On time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-base font-black flex items-center justify-center")}>
              Book for Your Event <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="tel:7995581545" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-8 text-base font-black border-2 border-white/20 text-white bg-white/10 hover:bg-white hover:text-black flex items-center justify-center")}>
              <Phone className="mr-2 h-5 w-5" /> 7995581545
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-black uppercase tracking-widest text-sm">What&apos;s Included</span>
              <h2 className="text-4xl font-black text-primary mt-2 mb-8">Hassle-Free Transport for Every Event</h2>
              <ul className="space-y-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5">
              {packages.map((pkg, i) => (
                <div key={i} className="bg-primary rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">{pkg.name}</p>
                    <p className="text-white text-sm">{pkg.note}</p>
                  </div>
                  <p className="text-secondary text-2xl font-black">{pkg.from}</p>
                </div>
              ))}
              <p className="text-xs text-muted-foreground px-1">* Toll, state, and parking charges extra. Corporate accounts available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-black text-primary mb-4">Let&apos;s Plan Your Event Transport</h2>
          <p className="text-muted-foreground text-lg mb-8">Reach out for bulk booking discounts, corporate accounts, and custom fleet arrangements.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 text-base font-black flex items-center justify-center mx-auto w-fit")}>
            Book Event Transport <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
