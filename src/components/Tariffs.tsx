"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const tariffs = [
  {
    category: "ALL SEDAN",
    "4hrs_40km": "1300/-",
    "8hrs_80km": "2000/-",
    "12hrs_rent": "Rs. 1400/-",
    extra_km: "12/-",
    extra_hr: "150/-",
    driver_beta: "Rs. 500/-",
    image: "/sedan.png",
  },
  {
    category: "NEW ERTIGA",
    "4hrs_40km": "1800/-",
    "8hrs_80km": "2800/-",
    "12hrs_rent": "Rs. 2000/-",
    extra_km: "15/-",
    extra_hr: "200/-",
    driver_beta: "Rs. 400/-",
    image: "/Ertiga.png",
  },
  {
    category: "INNOVA",
    "4hrs_40km": "2000/-",
    "8hrs_80km": "3000/-",
    "12hrs_rent": "Rs. 2000/-",
    extra_km: "16/-",
    extra_hr: "250/-",
    driver_beta: "Rs. 500/-",
    image: "/Innova.png",
  },
  {
    category: "INNOVA CRYSTA",
    "4hrs_40km": "2800/-",
    "8hrs_80km": "4000/-",
    "12hrs_rent": "Rs. 2500/-",
    extra_km: "16/-",
    extra_hr: "300/-",
    driver_beta: "Rs. 500/-",
    image: "/Innova_crystal.png",
  },
];

export default function Tariffs() {
  return (
    <section id="tariffs" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-black pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 pt-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Premium Fleet
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white"
          >
            Our <span className="text-secondary">Vehicle</span> Tariffs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl font-medium"
          >
            Transparent pricing for every group size and journey type.
            Choose your preferred vehicle category below.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {tariffs.map((tariff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-black/5 flex flex-col md:flex-row group hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)] transition-all duration-700"
            >
              {/* Left: Vehicle Photo */}
              <div className="md:w-2/5 bg-primary relative overflow-hidden flex flex-col items-center justify-end min-h-[220px]">
                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
                <Image
                  src={tariff.image}
                  alt={tariff.category}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Category + badge sit above the photo */}
                <div className="relative z-20 w-full p-6 flex flex-col items-center gap-2">
                  <h3 className="text-xl font-black text-white text-center tracking-tight drop-shadow">
                    {tariff.category}
                  </h3>
                  <Badge className="bg-secondary text-secondary-foreground font-black px-4 py-1 text-sm">
                    {tariff["12hrs_rent"]}
                  </Badge>
                </div>
              </div>

              {/* Right: Pricing Details */}
              <div className="md:w-3/5 p-10 flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">4 HRS / 40 KM</p>
                      <p className="text-2xl font-black text-primary">₹{tariff["4hrs_40km"]}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">8 HRS / 80 KM</p>
                      <p className="text-2xl font-black text-primary">₹{tariff["8hrs_80km"]}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      Extra KM
                      <span className="text-primary ml-auto">₹{tariff.extra_km}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      Extra Hour
                      <span className="text-primary ml-auto">₹{tariff.extra_hr}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      Driver Beta
                      <span className="text-primary ml-auto">{tariff.driver_beta}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full h-14 rounded-2xl text-base font-black group/btn flex items-center justify-center"
                  )}
                >
                  Book This Fleet
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom package banner */}
        <div className="mt-20 bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h4 className="text-3xl font-black mb-4">Need a Custom Package?</h4>
              <p className="text-white/65 font-medium text-lg leading-relaxed">
                We offer tailored solutions for monthly driver packages, full-day rentals,
                and corporate accounts. Contact us for a personalised quote.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-black">Monthly Driver Package</p>
                <p className="text-2xl font-black text-secondary">₹25,000 – ₹30,000</p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-black italic">
                * Driver Allowance ₹500 · After 10 PM ₹300 · Toll, State &amp; Parking Extra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
