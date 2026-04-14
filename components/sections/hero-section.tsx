"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";

export function HeroSection() {
  return (
    <SectionContainer
      padding="none"
      className="relative overflow-hidden min-h-[100vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-atmosphere-bg absolute inset-0" />
        <div className="atmosphere-grid absolute inset-0 opacity-[0.12]" />
        <div className="atmosphere-bottom-fade absolute inset-x-0 bottom-0 h-40" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
        {/* Main Heading */}
        <motion.h1
          className="font-montserrat text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[560] tracking-tighter leading-[1.1] text-text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Elevate Your{" "}
          <span className="hero-word-gradient bg-clip-text text-transparent">
            Wealth
          </span>{" "}
          Strategy
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 sm:mt-6 md:mt-8 mx-auto text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl lg:max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Inriser is the new-gen platform for precision investment tracking and
          deep market intelligence. Timely updates on market actions helping you
          take right decisions at the right time.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-14 lg:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Button variant="primary" size="lg" id="hero-cta">
            Join Waitlist
          </Button>
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          className="mt-4 sm:mt-5 text-xs text-text-tertiary mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          By joining, you agree to our next-gen privacy terms.
        </motion.p>
      </div>
    </SectionContainer>
  );
}
