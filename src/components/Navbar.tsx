"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Tariffs", href: "/tariffs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg">
            <Image
              src="/images/logo.png"
              alt="Brave Driver Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">BRAVE DRIVER</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Tours & Travels</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l pl-8">
            <Link href="tel:7995581545" className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" />
              7995581545
            </Link>
            <Link 
              href="/contact" 
              className={cn(buttonVariants(), "bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center")}
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <div className="container mx-auto flex flex-col gap-4 p-4 pb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr />
              <div className="flex flex-col gap-4">
                <Link href="tel:7995581545" className="flex items-center gap-2 text-base font-semibold text-primary">
                  <Phone className="h-5 w-5" />
                  7995581545
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className={cn(buttonVariants({ size: "lg" }), "w-full flex items-center justify-center")}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
