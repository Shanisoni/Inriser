

import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const trustSignals = [
  "Priority early access",
  "No noise, only actionable market signals",
  "Built for precision wealth tracking",
];

export function CtaSection() {
  return (
    <section className="flat-section-bg relative min-h-[480px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[640px] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[320px] sm:min-h-[360px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[2.75rem] border border-white/14 bg-[#090512] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 text-center shadow-[0_40px_120px_rgba(0,0,0,0.72)]">
            <div className="absolute inset-0 rounded-[inherit] border border-white/[0.04]" />
            <div className="absolute inset-x-6 sm:inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015)_18%,rgba(255,255,255,0)_40%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_22%)]" />
            <div className="absolute inset-x-3 inset-y-3 sm:inset-x-5 sm:inset-y-5 md:inset-x-6 md:inset-y-6 rounded-[inherit] bg-[linear-gradient(180deg,rgba(18,11,36,0.82),rgba(8,5,18,0.96))]" />
            <div className="absolute -right-24 -top-24 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-primary-400/16 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-white/[0.045] blur-3xl" />

            <div className="relative">
              {/* Badge */}
              <AnimatedContainer variant="fadeUp">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 sm:px-4 sm:py-2">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-200" />
                  <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.32em] text-white/72">
                    Early Access
                  </span>
                </div>
              </AnimatedContainer>

              {/* Heading */}
              <AnimatedContainer variant="fadeUp" delay={0.1}>
                <h2 className="font-montserrat mx-auto mt-5 sm:mt-6 md:mt-7 max-w-3xl text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4.35rem] font-[560] leading-[1.08] tracking-[-0.045em] text-white">
                  Ready to Elevate Your
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-white via-primary-100 to-primary-400 bg-clip-text text-transparent">
                    {" "}Investment Strategy?
                  </span>
                </h2>
              </AnimatedContainer>

              {/* Subtitle */}
              <AnimatedContainer variant="fadeUp" delay={0.2}>
                <p className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-white/66">
                  Join the waitlist today and be first to experience precision
                  wealth tracking built for clearer decisions, sharper signals,
                  and calmer portfolio oversight.
                </p>
              </AnimatedContainer>

              {/* CTA Buttons */}
              <AnimatedContainer variant="fadeUp" delay={0.3}>
                <div className="mt-7 sm:mt-8 md:mt-9 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto rounded-xl"
                    id="cta-waitlist"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[170px] rounded-2xl border border-white/10 bg-white/[0.03] text-white/82 hover:bg-white/[0.08]"
                  >
                    Learn More
                  </Button>
                </div>
              </AnimatedContainer>

              {/* Trust Signals */}
              <AnimatedContainer variant="fadeUp" delay={0.4}>
                <div className="mx-auto mt-6 sm:mt-8 flex max-w-3xl flex-col sm:flex-row flex-wrap items-center justify-center gap-x-5 gap-y-2.5 sm:gap-y-3">
                  {trustSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-white/56"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-200 flex-shrink-0" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
