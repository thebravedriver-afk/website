import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Wedding Travels | Brave Driver Tours & Travels",
  description: "Elegant wedding car services for your special day. Decorated vehicles, professional drivers, and timely arrivals.",
};

const highlights = [
  "Beautifully decorated wedding vehicles",
  "Bridal car and convoy arrangements",
  "Punctual and professional chauffeurs",
  "Multi-vehicle fleet for entire wedding party",
  "Reception and after-party transfers",
  "Outstation wedding travel packages",
];

const packages = [
  { name: "Half Day (4 Hrs)", from: "₹1,300+", note: "Ideal for ceremony transfers" },
  { name: "Full Day (8 Hrs)", from: "₹2,000+", note: "Wedding day complete coverage" },
  { name: "Multi-Vehicle", from: "Custom", note: "Fleet packages on request" },
];

export default function WeddingTravelsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,200,50,0.15),_transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
              <Heart className="h-6 w-6 text-secondary-foreground" />
            </div>
            <span className="text-secondary font-black uppercase tracking-widest text-sm">Wedding Travels</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl">
            Elegant Rides for <span className="text-secondary">Your Special Day</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-10">
            Make your wedding day truly unforgettable with our premium wedding travel service.
            Stylish vehicles, decorated fleets, and professional drivers at your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-base font-black flex items-center justify-center")}>
              Book for Your Wedding <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-4xl font-black text-primary mt-2 mb-8">A Seamless Experience for the Perfect Occasion</h2>
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
              <p className="text-xs text-muted-foreground px-1">* Decoration, toll, and parking charges may apply. Contact us for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-black text-primary mb-4">Plan Your Wedding Transfers</h2>
          <p className="text-muted-foreground text-lg mb-8">Get in touch for a personalised quote tailored to your wedding schedule and fleet requirements.</p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 text-base font-black flex items-center justify-center mx-auto w-fit")}>
            Get a Wedding Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
