"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, Car, Shield, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  { label: "సంతోషకర ప్రయాణాలు", sublabel: "Happy Clients", value: "2k+" },
  { label: "వాహనాలు", sublabel: "Vehicles", value: "50+" },
  { label: "సురక్షిత ప్రయాణాలు", sublabel: "Safe Trips", value: "5k+" },
  { label: "గమ్యస్థానాలు", sublabel: "Destinations", value: "100+" },
];

const badges = [
  { icon: Car, text: "All Vehicle Types" },
  { icon: Shield, text: "Safe & Insured" },
  { icon: Clock, text: "24/7 Available" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Brave Driver Hero"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        {/* Deep blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/96 via-primary/82 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      </div>

      {/* Decorative dot-grid — subtle Indian geometric motif */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-2xl">

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-1.5 mb-6"
          >
            <MapPin className="h-3.5 w-3.5 text-secondary" />
            <span className="text-secondary text-xs font-black tracking-widest uppercase">
              విజయవాడ · Vijayawada, Andhra Pradesh
            </span>
          </motion.div>

          {/* Stars + label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="flex text-secondary">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-white/70 text-sm font-bold tracking-widest uppercase">
              Top-Rated in Vijayawada
            </span>
          </motion.div>

          {/* Telugu welcome */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-secondary/90 text-base font-semibold mb-2 tracking-wide"
          >
            స్వాగతం — Welcome to
          </motion.p>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-2"
          >
            <span className="text-secondary font-black text-lg md:text-xl tracking-[0.3em] uppercase block drop-shadow-md">
              Tours &amp; Travels
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-5 drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)]"
          >
            BRAVE
            <span className="block text-secondary drop-shadow-[0_0_30px_rgba(247,160,29,0.35)]">
              DRIVER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/85 mb-3 leading-relaxed font-semibold drop-shadow-md"
          >
            Reliable, Affordable, and Flexible Travel Solutions
          </motion.p>

          {/* Telugu tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="text-secondary/80 text-sm font-medium mb-3"
          >
            మీ విశ్వసనీయ ప్రయాణ సహచరుడు
            <span className="text-white/40 ml-2 text-xs">— Your trusted travel companion</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-base text-white/65 mb-10 leading-relaxed max-w-lg"
          >
            Based on the banks of the Krishna River in Vijayawada — serving local city rides, outstation trips to Hyderabad, Tirupati, Vizag &amp; beyond, weddings, events, and self-drive rentals across Andhra Pradesh.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 px-8 text-base font-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              )}
            >
              బుక్ చేయండి · Book Your Ride <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:7995581545"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 px-8 text-base font-black border-2 border-white/25 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              )}
            >
              <Phone className="mr-2 h-5 w-5" /> 7995581545
            </Link>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm text-white/85 font-semibold"
              >
                <badge.icon className="h-4 w-4 text-secondary" />
                {badge.text}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/15 pt-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black text-secondary">{stat.value}</span>
                <span className="text-[11px] text-white/70 font-semibold mt-0.5">{stat.label}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">{stat.sublabel}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
