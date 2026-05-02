"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, ChevronLeft, Car, MapPin, Calendar, Clock, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const vehicleCategories = [
  { value: "All Sedan", label: "All Sedan", seats: 4 },
  { value: "New Ertiga", label: "New Ertiga", seats: 6 },
  { value: "Innova", label: "Innova", seats: 7 },
  { value: "Innova Crysta", label: "Innova Crysta", seats: 7 },
];

const tripTypes = [
  { value: "local", label: "Local City Ride" },
  { value: "outstation", label: "Outstation Trip" },
  { value: "airport", label: "Airport Transfer" },
  { value: "wedding", label: "Wedding / Event" },
  { value: "self-drive", label: "Self-Drive Rental" },
  { value: "custom", label: "Custom Package" },
];

export default function Tariffs() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [tripDetails, setTripDetails] = useState({
    vehicleCategory: "",
    tripType: "",
    pickupLocation: "",
    dropLocation: "",
    travelDate: "",
    duration: "",
    passengers: "1",
  });

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const updateTripDetail = (key: string, value: string) => {
    setTripDetails((prev) => ({ ...prev, [key]: value }));
  };

  const updateContactInfo = (key: string, value: string) => {
    setContactInfo((prev) => ({ ...prev, [key]: value }));
  };

  const canProceedToStep2 = () => {
    return (
      tripDetails.vehicleCategory &&
      tripDetails.tripType &&
      tripDetails.pickupLocation
    );
  };

  const canSubmit = () => {
    return contactInfo.name && contactInfo.phone;
  };

  const formatMessage = () => {
    return [
      `Vehicle: ${tripDetails.vehicleCategory}`,
      `Trip Type: ${tripTypes.find((t) => t.value === tripDetails.tripType)?.label || tripDetails.tripType}`,
      `Pickup: ${tripDetails.pickupLocation}`,
      tripDetails.dropLocation ? `Drop: ${tripDetails.dropLocation}` : null,
      tripDetails.travelDate ? `Travel Date: ${tripDetails.travelDate}` : null,
      tripDetails.duration ? `Duration: ${tripDetails.duration}` : null,
      `Passengers: ${tripDetails.passengers}`,
      contactInfo.notes ? `\nNotes: ${contactInfo.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeGm187zwT4O5FyWDRTTLW6Nc2Ar3nCmAgwDEY8Wwn976AY9Q/formResponse";

    const data = new URLSearchParams();
    data.append("entry.735563514", contactInfo.name);
    data.append("entry.1529549061", contactInfo.email);
    data.append("entry.1012230411", contactInfo.phone);
    data.append("entry.1643212355", tripDetails.vehicleCategory);
    data.append("entry.1506451490", formatMessage());

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
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    setTripDetails({
      vehicleCategory: "",
      tripType: "",
      pickupLocation: "",
      dropLocation: "",
      travelDate: "",
      duration: "",
      passengers: "1",
    });
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
  };

  return (
    <section id="tariffs" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Dark hero area — tall enough to cover heading + step indicator */}
      <div className="absolute top-0 left-0 w-full h-[340px] bg-black pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        {/* ====== HEADER + STEP INDICATOR (on dark bg) ====== */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Request a Quote
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white"
          >
            Get <span className="text-secondary">Your</span> Fare Estimate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl font-medium"
          >
            Tell us about your trip and we&apos;ll get back to you with the best prices.
          </motion.p>

          {/* Steps Indicator — inside same dark area */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-black transition-all duration-500 ${
                    step >= 1 ? "bg-secondary text-black" : "bg-white/15 text-white/50"
                  }`}
                >
                  1
                </div>
                <span
                  className={`text-sm font-bold hidden sm:inline transition-colors ${
                    step >= 1 ? "text-white" : "text-white/40"
                  }`}
                >
                  Trip Details
                </span>
              </div>
              <div
                className={`h-0.5 w-16 transition-colors duration-500 ${
                  step >= 2 ? "bg-secondary" : "bg-white/20"
                }`}
              />
              <div className="flex items-center gap-2">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-black transition-all duration-500 ${
                    step >= 2 ? "bg-secondary text-black" : "bg-white/15 text-white/50"
                  }`}
                >
                  2
                </div>
                <span
                  className={`text-sm font-bold hidden sm:inline transition-colors ${
                    step >= 2 ? "text-white" : "text-white/40"
                  }`}
                >
                  Contact Info
                </span>
              </div>
              <div
                className={`h-0.5 w-16 transition-colors duration-500 ${
                  step >= 3 ? "bg-secondary" : "bg-white/20"
                }`}
              />
              <div className="flex items-center gap-2">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-black transition-all duration-500 ${
                    step >= 3 ? "bg-secondary text-black" : "bg-white/15 text-white/50"
                  }`}
                >
                  ✓
                </div>
                <span
                  className={`text-sm font-bold hidden sm:inline transition-colors ${
                    step >= 3 ? "text-white" : "text-white/40"
                  }`}
                >
                  Done
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ====== FORM CARD ====== */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-black/5">
            <AnimatePresence mode="wait">
              {/* ====== STEP 3: SUCCESS ====== */}
              {isSuccess ? (
                <motion.div
                  key="success"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="p-12 md:p-16 flex flex-col items-center text-center"
                >
                  <div className="h-24 w-24 rounded-full bg-secondary/10 flex items-center justify-center mb-8">
                    <Send className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">
                    Inquiry Submitted! 🎉
                  </h3>
                  <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
                  <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-4">
                    Thank you for reaching out to{" "}
                    <span className="font-bold text-primary">Brave Driver Tours &amp; Travels</span>.
                  </p>
                  <p className="text-xl font-bold text-primary mb-8">
                    We will be back with prices shortly!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                    <Button
                      onClick={resetForm}
                      className="flex-1 h-14 rounded-2xl text-base font-black"
                    >
                      Submit Another Request
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => (window.location.href = "/")}
                      className="flex-1 h-14 rounded-2xl text-base font-black"
                    >
                      Back to Home
                    </Button>
                  </div>
                  <div className="mt-10 pt-8 border-t w-full max-w-sm">
                    <p className="text-sm text-muted-foreground mb-3 font-medium">
                      Meanwhile, reach us directly:
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-primary">
                      <Phone className="h-4 w-4" />
                      <a href="tel:7995581545">7995581545</a>
                      <span className="text-muted-foreground font-normal">/</span>
                      <a href="tel:7416910367">7416910367</a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <>
                  {/* ====== STEP 1: TRIP DETAILS ====== */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="p-10 md:p-14"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                          <Car className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-primary">
                            Tell Us About Your Trip
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            We&apos;ll tailor the best package for you.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Vehicle Category */}
                        <div className="space-y-3">
                          <Label className="text-base font-bold">Preferred Vehicle</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {vehicleCategories.map((v) => (
                              <button
                                key={v.value}
                                type="button"
                                onClick={() => updateTripDetail("vehicleCategory", v.value)}
                                className={`p-4 rounded-2xl border-2 text-center transition-all duration-200 ${
                                  tripDetails.vehicleCategory === v.value
                                    ? "border-secondary bg-secondary/5 shadow-sm"
                                    : "border-input bg-background hover:border-primary/40"
                                }`}
                              >
                                <p className="font-extrabold text-sm text-foreground">{v.label}</p>
                                <p className="text-[10px] text-muted-foreground font-semibold mt-1">
                                  {v.seats} Seats
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Trip Type */}
                        <div className="space-y-3">
                          <Label className="text-base font-bold">Trip Type</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {tripTypes.map((t) => (
                              <button
                                key={t.value}
                                type="button"
                                onClick={() => updateTripDetail("tripType", t.value)}
                                className={`p-3 rounded-2xl border-2 text-center transition-all duration-200 ${
                                  tripDetails.tripType === t.value
                                    ? "border-secondary bg-secondary/5 shadow-sm"
                                    : "border-input bg-background hover:border-primary/40"
                                }`}
                              >
                                <p className="font-bold text-xs text-foreground">{t.label}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Pickup & Drop */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pickup" className="text-base font-bold">
                              <MapPin className="h-4 w-4 inline mr-1 text-primary" />
                              Pickup Location
                            </Label>
                            <Input
                              id="pickup"
                              value={tripDetails.pickupLocation}
                              onChange={(e) => updateTripDetail("pickupLocation", e.target.value)}
                              placeholder="e.g. Vijayawada"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="drop" className="text-base font-bold">
                              <MapPin className="h-4 w-4 inline mr-1 text-primary" />
                              Drop Location
                            </Label>
                            <Input
                              id="drop"
                              value={tripDetails.dropLocation}
                              onChange={(e) => updateTripDetail("dropLocation", e.target.value)}
                              placeholder="e.g. Hyderabad (optional)"
                            />
                          </div>
                        </div>

                        {/* Travel Date & Duration */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date" className="text-base font-bold">
                              <Calendar className="h-4 w-4 inline mr-1 text-primary" />
                              Travel Date
                            </Label>
                            <Input
                              id="date"
                              type="date"
                              value={tripDetails.travelDate}
                              onChange={(e) => updateTripDetail("travelDate", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="duration" className="text-base font-bold">
                              <Clock className="h-4 w-4 inline mr-1 text-primary" />
                              Duration
                            </Label>
                            <Input
                              id="duration"
                              value={tripDetails.duration}
                              onChange={(e) => updateTripDetail("duration", e.target.value)}
                              placeholder="e.g. Full day, 2 days, Weekly"
                            />
                          </div>
                        </div>

                        {/* Passengers */}
                        <div className="space-y-2 max-w-[160px]">
                          <Label htmlFor="passengers" className="text-base font-bold">
                            <User className="h-4 w-4 inline mr-1 text-primary" />
                            Passengers
                          </Label>
                          <Input
                            id="passengers"
                            type="number"
                            min="1"
                            max="12"
                            value={tripDetails.passengers}
                            onChange={(e) => updateTripDetail("passengers", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end mt-10">
                        <Button
                          onClick={() => setStep(2)}
                          disabled={!canProceedToStep2()}
                          className="h-14 px-10 rounded-2xl text-base font-black group/btn"
                        >
                          Continue
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* ====== STEP 2: CONTACT INFO ====== */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="p-10 md:p-14"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-primary">
                            Your Contact Details
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            We&apos;ll reach out with your personalized fare estimate.
                          </p>
                        </div>
                      </div>

                      {/* Summary chip */}
                      <div className="bg-muted/20 rounded-2xl p-4 mb-8 border">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                          Your Selection
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                          <span className="font-bold text-primary">{tripDetails.vehicleCategory}</span>
                          <span className="text-muted-foreground">·</span>
                          <span>{tripTypes.find((t) => t.value === tripDetails.tripType)?.label}</span>
                          <span className="text-muted-foreground">·</span>
                          <span>{tripDetails.pickupLocation}{tripDetails.dropLocation ? ` → ${tripDetails.dropLocation}` : ""}</span>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-base font-bold">
                              <User className="h-4 w-4 inline mr-1 text-primary" />
                              Full Name
                            </Label>
                            <Input
                              id="name"
                              value={contactInfo.name}
                              onChange={(e) => updateContactInfo("name", e.target.value)}
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-base font-bold">
                              <Mail className="h-4 w-4 inline mr-1 text-primary" />
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={contactInfo.email}
                              onChange={(e) => updateContactInfo("email", e.target.value)}
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-bold">
                            <Phone className="h-4 w-4 inline mr-1 text-primary" />
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={contactInfo.phone}
                            onChange={(e) => updateContactInfo("phone", e.target.value)}
                            placeholder="+91 00000 00000"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes" className="text-base font-bold">
                            Additional Notes
                          </Label>
                          <textarea
                            id="notes"
                            rows={3}
                            value={contactInfo.notes}
                            onChange={(e) => updateContactInfo("notes", e.target.value)}
                            placeholder="Any special requests or preferences..."
                            className="flex min-h-[80px] w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row gap-4 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="h-14 flex-1 rounded-2xl text-base font-black"
                          >
                            <ChevronLeft className="mr-2 h-5 w-5" />
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={!canSubmit() || isSubmitting}
                            className="h-14 flex-[2] rounded-2xl text-base font-black group/btn"
                          >
                            {isSubmitting ? (
                              "Submitting..."
                            ) : (
                              <>
                                Request Fare Estimate
                                <Send className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ====== BOTTOM BANNER ====== */}
        <div className="mt-20 bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h4 className="text-3xl font-black mb-4">Need an Instant Answer?</h4>
              <p className="text-white/65 font-medium text-lg leading-relaxed">
                Call us directly for immediate assistance. We&apos;re available 24/7 for
                bookings, inquiries, and custom packages.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-black">
                  Call or WhatsApp
                </p>
                <p className="text-2xl font-black text-secondary">
                  <a href="tel:7995581545">7995581545</a>
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-black italic">
                Also reachable at 7416910367
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
