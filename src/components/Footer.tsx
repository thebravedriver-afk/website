import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.png"
                  alt="Brave Driver Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-primary">BRAVE DRIVER</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Tours & Travels</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              మీ విశ్వసనీయ ప్రయాణ సహచరుడు — Your trusted travel companion based in
              Vijayawada, Andhra Pradesh.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-foreground">Services</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/services/car-tours" className="hover:text-primary transition-colors">Car Tour Services</Link></li>
              <li><Link href="/services/wedding-travels" className="hover:text-primary transition-colors">Wedding Travels</Link></li>
              <li><Link href="/services/event-travels" className="hover:text-primary transition-colors">Event Travels</Link></li>
              <li><Link href="/services/self-drive" className="hover:text-primary transition-colors">Self-Drive Cars</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#tariffs" className="hover:text-primary transition-colors">Tariffs</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <Link href="tel:7995581545" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                7995581545 / 7416910367
              </Link>
              <Link href="mailto:thebravedriver@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                thebravedriver@gmail.com
              </Link>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Vijayawada, Andhra Pradesh — కృష్ణా నది తీరం<br />
                  <span className="text-xs">Local &amp; outstation across AP &amp; beyond</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-24 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Brave Driver Tours &amp; Travels · Vijayawada, Andhra Pradesh · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
