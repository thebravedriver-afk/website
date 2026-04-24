"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Calendar } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeGm187zwT4O5FyWDRTTLW6Nc2Ar3nCmAgwDEY8Wwn976AY9Q/formResponse";

    const data = new URLSearchParams();
    data.append("entry.735563514", formData.get("name") as string);
    data.append("entry.1529549061", formData.get("email") as string);
    data.append("entry.1012230411", formData.get("phone") as string);
    data.append("entry.1643212355", formData.get("service") as string);
    data.append("entry.1506451490", formData.get("message") as string);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Even with no-cors, we might get an error if the network fails
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Info & Calendly */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-8"
            >
              Ready to Plan Your Next Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-12"
            >
              Have questions about our tariffs or need a custom quote? 
              Contact us directly or schedule a call with our travel experts.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <Card className="border-none bg-muted/40">
                <CardHeader className="pb-2">
                  <Phone className="h-5 w-5 text-primary mb-2" />
                  <CardTitle className="text-base">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-bold text-foreground">7995581545</p>
                  <p className="text-sm font-bold text-foreground">7416910367</p>
                </CardContent>
              </Card>
              <Card className="border-none bg-muted/40">
                <CardHeader className="pb-2">
                  <Mail className="h-5 w-5 text-primary mb-2" />
                  <CardTitle className="text-base">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-bold text-foreground">thebravedriver@gmail.com</p>
                </CardContent>
              </Card>
            </div>

            {/* Calendly Placeholder */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Schedule a Consultation</h3>
                  <p className="text-sm text-muted-foreground">Book a time to discuss your travel needs.</p>
                </div>
              </div>
              <Link 
                href="https://calendly.com/thebravedriver" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "w-full h-12 text-base font-bold flex items-center justify-center")}
              >
                Open Scheduling Page
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/30 rounded-3xl p-8 md:p-12 border shadow-sm"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Send className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                <Button variant="link" onClick={() => setIsSuccess(false)} className="mt-6">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Interested Service</Label>
                  <select 
                    id="service" 
                    name="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Car Tour Services</option>
                    <option>Wedding Travels</option>
                    <option>Event Travels</option>
                    <option>Self-Drive Cars</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your travel plans..."
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button type="submit" className="w-full h-14 text-lg font-bold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
