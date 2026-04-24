"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "వెంకట రావు",
    nameEn: "Venkat Rao",
    role: "Business Traveler, Vijayawada",
    content: "విజయవాడ నుండి హైదరాబాద్ వరకు అద్భుతమైన ప్రయాణం. Very punctual, safe, and clean vehicles. Best service for corporate travel in Vijayawada!",
    rating: 5,
  },
  {
    name: "లక్ష్మీ దేవి",
    nameEn: "Lakshmi Devi",
    role: "Wedding Client, Guntur",
    content: "మా అమ్మాయి పెళ్ళికి వీళ్ళ సేవలు తీసుకున్నాం. The fleet was premium, drivers very courteous. Reached Kanaka Durga temple on time — stress-free and memorable!",
    rating: 5,
  },
  {
    name: "రవి శంకర్",
    nameEn: "Ravi Shankar",
    role: "Regular Customer, Amaravati",
    content: "Vijayawada to Tirupati darshan trip was perfectly arranged. No hidden costs, transparent pricing. నా అన్ని ప్రయాణాలకు ఇదే నా first choice!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-black tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            మా వినియోగదారుల అభిప్రాయాలు · Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-primary"
          >
            మా <span className="text-secondary">ప్రయాణికులు</span> చెప్పేది
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg"
          >
            What our clients across Vijayawada, Guntur &amp; Andhra Pradesh say about us.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-muted/30 p-8 rounded-[2.5rem] border border-black/5 relative group hover:bg-primary hover:border-primary transition-all duration-500"
            >
              <Quote className="absolute top-7 right-7 h-10 w-10 text-primary/10 group-hover:text-white/10 transition-colors" />

              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-base font-medium leading-relaxed mb-6 relative z-10 italic text-foreground group-hover:text-white/90 transition-colors">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-black text-xl shrink-0">
                  {testimonial.nameEn[0]}
                </div>
                <div>
                  <h4 className="font-black tracking-tight text-foreground group-hover:text-white transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-secondary">{testimonial.nameEn}</p>
                  <p className="text-xs text-muted-foreground group-hover:text-white/50 transition-colors mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
