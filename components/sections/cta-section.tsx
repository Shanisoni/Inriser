"use client";

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
    <section className="flat-section-bg relative min-h-[560px] overflow-hidden py-24 md:min-h-[640px] md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/14 bg-[#090512] px-6 py-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.72)] md:px-12 md:py-16 lg:px-16">
            <div className="absolute inset-0 rounded-[2.75rem] border border-white/[0.04]" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015)_18%,rgba(255,255,255,0)_40%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_22%)]" />
            <div className="absolute inset-x-6 inset-y-6 rounded-[2.25rem] bg-[linear-gradient(180deg,rgba(18,11,36,0.82),rgba(8,5,18,0.96))]" />
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-400/16 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-white/[0.045] blur-3xl" />

            <div className="relative">
              <AnimatedContainer variant="fadeUp">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary-200" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/72">
                    Early Access
                  </span>
                </div>
              </AnimatedContainer>

              <AnimatedContainer variant="fadeUp" delay={0.1}>
                <h2 className="font-montserrat mx-auto mt-7 max-w-3xl text-4xl font-[560] leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-[4.35rem]">
                  Ready to Elevate Your
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-white via-primary-100 to-primary-400 bg-clip-text text-transparent">
                    Investment Strategy?
                  </span>
                </h2>
              </AnimatedContainer>

              <AnimatedContainer variant="fadeUp" delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/66 md:text-lg">
                  Join the waitlist today and be first to experience precision
                  wealth tracking built for clearer decisions, sharper signals,
                  and calmer portfolio oversight.
                </p>
              </AnimatedContainer>

              <AnimatedContainer variant="fadeUp" delay={0.3}>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    variant="primary"
                    size="lg"
                    className="rounded-xl"
                    id="cta-waitlist"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="min-w-[170px] rounded-2xl border border-white/10 bg-white/[0.03] text-white/82 hover:bg-white/[0.08]"
                  >
                    Learn More
                  </Button>
                </div>
              </AnimatedContainer>

              <AnimatedContainer variant="fadeUp" delay={0.4}>
                <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3">
                  {trustSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-2 text-xs font-medium text-white/56"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary-200" />
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
