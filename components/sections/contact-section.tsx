

import { MapPin, Mail } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { AnimatedContainer } from "@/components/ui/animated-container";

export function ContactSection() {
  return (
    <SectionContainer id="contact" bg="default" padding="lg" className="flat-section-bg relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
        {/* Left */}
        <AnimatedContainer variant="slideLeft">
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">Get in Touch</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-text-primary">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Talk.
                </span>
              </h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 sm:space-y-6 inline-flex flex-col items-start mx-auto lg:mx-0">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-100/80 border border-primary-200/60 flex items-center justify-center shrink-0 dark:bg-primary-200/10 dark:border-primary-400/20">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="pt-0.5 sm:pt-1 text-left">
                  <p className="font-semibold text-sm sm:text-base text-text-primary">Headquarters</p>
                  <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-100/80 border border-primary-200/60 flex items-center justify-center shrink-0 dark:bg-primary-200/10 dark:border-primary-400/20">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="pt-0.5 sm:pt-1 text-left">
                  <p className="font-semibold text-sm sm:text-base text-text-primary">Email Us</p>
                  <a
                    href="mailto:contact@inriser.com"
                    className="text-xs sm:text-sm text-primary hover:opacity-80 transition-opacity mt-0.5 inline-block"
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
          <div className="relative md:pl-8 text-center lg:text-left">
            {/* Decorative Quote Mark */}
            <span className="hidden md:block absolute -top-8 -left-4 text-[8rem] text-primary-500/10 font-serif leading-none select-none pointer-events-none">
              &quot;
            </span>
            
            <p className="relative z-10 text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-light italic text-text-secondary leading-relaxed md:leading-snug max-w-lg mx-auto lg:mx-0">
              Whether you&apos;re an investor, partner, or just curious, our
              founders are ready to connect.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </SectionContainer>
  );
}
