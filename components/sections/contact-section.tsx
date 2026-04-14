"use client";

import { MapPin, Mail } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { AnimatedContainer } from "@/components/ui/animated-container";

export function ContactSection() {
  return (
    <SectionContainer id="contact" bg="default" padding="lg" className="flat-section-bg relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <AnimatedContainer variant="slideLeft">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-widest">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-text-primary">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Talk.
                </span>
              </h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-primary-100/80 border border-primary-200/60 flex items-center justify-center shrink-0 dark:bg-primary-200/10 dark:border-primary-400/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-text-primary">Headquarters</p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-primary-100/80 border border-primary-200/60 flex items-center justify-center shrink-0 dark:bg-primary-200/10 dark:border-primary-400/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-text-primary">Email Us</p>
                  <a
                    href="mailto:contact@inriser.com"
                    className="text-sm text-primary hover:opacity-80 transition-opacity mt-0.5 inline-block"
                  >
                    contact@inriser.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Right — Statement */}
        <AnimatedContainer variant="slideRight" delay={0.15} className="flex flex-col justify-center h-full">
          <div className="relative md:pl-8">
            {/* Decorative Quote Mark */}
            <span className="hidden md:block absolute -top-8 -left-4 text-[8rem] text-primary-500/10 font-serif leading-none select-none pointer-events-none">
              &quot;
            </span>
            
            <p className="relative z-10 text-xl md:text-2xl lg:text-[1.75rem] font-light italic text-text-secondary leading-relaxed md:leading-snug">
              Whether you&apos;re an investor, partner, or just curious, our
              founders are ready to connect.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </SectionContainer>
  );
}
