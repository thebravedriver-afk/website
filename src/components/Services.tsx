"use client";

import { motion } from "framer-motion";
import { Heart, Briefcase, Key, ShieldCheck, Map, Clock, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Car Tour Services",
    titleTe: "కార్ పర్యటన సేవలు",
    description: "Personalized local and outstation trips designed for comfort. City tours, highway adventures, airport transfers — all covered.",
    icon: Map,
    href: "/services/car-tours",
    features: ["Local city tours", "Outstation trips", "Airport transfers", "Custom itineraries"],
    badge: "Most Popular",
    cardGradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    num: "02",
    title: "Wedding Travels",
    titleTe: "వివాహ ప్రయాణాలు",
    description: "Elegant rides for your special day. Decorated fleet, professional chauffeurs, and on-time arrival guaranteed.",
    icon: Heart,
    href: "/services/wedding-travels",
    features: ["Decorated vehicles", "Timely arrivals", "Multi-vehicle packages", "Professional drivers"],
    badge: "Special Occasions",
    cardGradient: "from-orange-600 via-orange-500 to-amber-400",
  },
  {
    num: "03",
    title: "Event Travels",
    titleTe: "ఈవెంట్ ప్రయాణాలు",
    description: "Corporate conferences, personal celebrations, exhibitions — reliable group transport for every kind of event.",
    icon: Briefcase,
    href: "/services/event-travels",
    features: ["Corporate events", "Conferences", "Personal celebrations", "Group transport"],
    badge: "Corporate",
    cardGradient: "from-amber-500 via-orange-500 to-orange-600",
  },
  {
    num: "04",
    title: "Self-Drive Cars",
    titleTe: "స్వయం చాలన కార్లు",
    description: "Freedom to explore at your own pace. Rent a well-maintained car with flexible daily, weekly, or monthly plans.",
    icon: Key,
    href: "/services/self-drive",
    features: ["Daily rentals", "Weekly packages", "No driver required", "Multiple vehicle options"],
    badge: "Flexible",
    cardGradient: "from-yellow-500 via-amber-500 to-orange-500",
  },
];

const features = [
  { title: "Safety First", icon: ShieldCheck, desc: "Professional drivers and well-maintained vehicles." },
  { title: "24/7 Support", icon: Clock, desc: "We are always available to assist you on your journey." },
  { title: "Affordable", icon: Wallet, desc: "Transparent pricing with no hidden charges." },
  { title: "Flexible", icon: Map, desc: "Tailored packages to match your specific requirements." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-black tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            మా సేవలు · Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mt-2 mb-6 tracking-tight text-primary"
          >
            Premium Travel <span className="text-secondary">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Whether it&apos;s a quick trip across Vijayawada or a long journey across Andhra Pradesh,
            we have the perfect vehicle and service for every occasion.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${service.cardGradient} hover:-translate-y-2 transition-all duration-500`}
              style={{ boxShadow: "0 20px 60px rgba(234,88,12,0.25)" }}
            >
              {/* Subtle inner noise texture overlay */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Bottom-right dark vignette for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Large watermark number */}
              <span className="absolute -bottom-2 -right-4 text-[8rem] font-black text-white/10 select-none leading-none pointer-events-none">
                {service.num}
              </span>

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Top row: number + badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-white/50 text-xs font-black tracking-widest">{service.num}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/25 text-white border border-white/30">
                    {service.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="h-14 w-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-1 leading-tight drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-white/70 text-xs font-semibold mb-4 tracking-wide">
                  {service.titleTe}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-7">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[11px] bg-white/15 border border-white/25 text-white font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/20 mb-6 mt-auto" />

                {/* CTA */}
                <Link
                  href={service.href}
                  className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-white hover:gap-4 transition-all duration-300"
                >
                  Explore Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-14">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                <feature.icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-black text-foreground mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
