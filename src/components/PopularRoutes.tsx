"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Navigation } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const routes = [
  {
    destination: "అమరావతి",
    destinationEn: "Amaravati",
    description: "New AP Capital",
    distance: "30 km",
    duration: "45 min",
    highlight: true,
  },
  {
    destination: "గుంటూరు",
    destinationEn: "Guntur",
    description: "Regional Hub",
    distance: "35 km",
    duration: "50 min",
    highlight: false,
  },
  {
    destination: "హైదరాబాద్",
    destinationEn: "Hyderabad",
    description: "Business Capital",
    distance: "275 km",
    duration: "4.5 hrs",
    highlight: true,
  },
  {
    destination: "తిరుపతి",
    destinationEn: "Tirupati",
    description: "Tirumala Temple",
    distance: "350 km",
    duration: "6 hrs",
    highlight: false,
  },
  {
    destination: "రాజమహేంద్రవరం",
    destinationEn: "Rajahmundry",
    description: "Cultural Capital",
    distance: "100 km",
    duration: "2 hrs",
    highlight: false,
  },
  {
    destination: "విశాఖపట్నం",
    destinationEn: "Visakhapatnam",
    description: "City of Destiny",
    distance: "350 km",
    duration: "6 hrs",
    highlight: true,
  },
  {
    destination: "చెన్నై",
    destinationEn: "Chennai",
    description: "Gateway to South India",
    distance: "450 km",
    duration: "8.5 hrs",
    highlight: false,
  },
  {
    destination: "బెంగళూరు",
    destinationEn: "Bangalore",
    description: "Garden City & Tech Hub",
    distance: "650 km",
    duration: "12 hrs",
    highlight: false,
  },
  {
    destination: "నెల్లూరు",
    destinationEn: "Nellore",
    description: "City of Prawns",
    distance: "280 km",
    duration: "5 hrs",
    highlight: false,
  },
  {
    destination: "కర్నూలు",
    destinationEn: "Kurnool",
    description: "Gateway to Rayalaseema",
    distance: "340 km",
    duration: "6.5 hrs",
    highlight: false,
  },
  {
    destination: "కాకినాడ",
    destinationEn: "Kakinada",
    description: "Fertilizer City",
    distance: "200 km",
    duration: "4.5 hrs",
    highlight: false,
  },
  {
    destination: "ఏలూరు",
    destinationEn: "Eluru",
    description: "The Paddy Fields",
    distance: "65 km",
    duration: "1.5 hrs",
    highlight: false,
  },
];

export default function PopularRoutes() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle dot grid — Indian geometric motif */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Warm saffron glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full -mr-64 -mt-64 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Navigation className="h-3.5 w-3.5 text-secondary" />
            <span className="text-secondary text-xs font-black tracking-widest uppercase">
              ప్రసిద్ధ మార్గాలు · Popular Routes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
          >
            విజయవాడ నుండి <span className="text-secondary block md:inline">ప్రయాణాలు</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-lg"
          >
            Outstation trips from Vijayawada across Andhra Pradesh and beyond.
            Transparent fares, professional drivers, comfortable vehicles.
          </motion.p>
        </div>

        {/* Origin marker */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px flex-1 bg-white/10 max-w-xs" />
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span className="text-white font-black text-sm tracking-wider">VIJAYAWADA</span>
            <span className="text-secondary text-xs">·</span>
            <span className="text-white/60 text-xs font-semibold">కృష్ణా నది తీరం</span>
          </div>
          <div className="h-px flex-1 bg-white/10 max-w-xs" />
        </div>

        {/* Route cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {routes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={cn(
                "relative rounded-2xl p-6 border transition-all duration-500 hover:-translate-y-1 group overflow-hidden",
                route.highlight
                  ? "bg-secondary/15 border-secondary/40 hover:bg-secondary/25"
                  : "bg-white/8 border-white/12 hover:bg-white/12"
              )}
            >
              {/* Connector arrow */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <div className="h-8 w-px bg-white/20 my-0.5" />
                  <div className="h-2 w-2 rounded-full bg-white/40" />
                </div>
                <div className="flex-1">
                  <p className="text-white/45 text-xs font-bold uppercase tracking-wider mb-1">Vijayawada</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-black text-xl leading-none">{route.destinationEn}</span>
                    {route.highlight && (
                      <span className="text-[9px] bg-secondary text-secondary-foreground font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-secondary text-sm font-semibold mt-0.5">{route.destination}</p>
                </div>
              </div>

              <p className="text-white/50 text-xs mb-4">{route.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-white/60 font-semibold">
                  <span>{route.distance}</span>
                  <span>·</span>
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                  <ArrowRight className="h-4 w-4 text-white group-hover:text-secondary-foreground transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-10 text-base font-black flex items-center justify-center mx-auto w-fit"
            )}
          >
            ధర అడగండి · Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
