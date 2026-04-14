

import Image from "next/image";
import vipinPortrait from "@/app/Vipin.png";
import { SectionContainer } from "@/components/layout/section-container";
import { FounderCard } from "@/components/ui/founder-card";
import { AnimatedContainer } from "@/components/ui/animated-container";

const founders = [
  {
    name: "Vipin Kumar",
    title: "CO-FOUNDER & CEO",
    quote:
      "A seasoned Chartered Accountant with over 14 years of professional mastery. He brings a legacy of precision to Inriser.",
    linkedinUrl: "https://www.linkedin.com/",
    expertise: ["Technology", "Compliance", "Governance", "Forensic Analytics"],
  },
];

export function FoundersSection() {
  return (
    <SectionContainer
      id="founders"
      bg="dark"
      padding="lg"
      className="flat-section-bg relative overflow-hidden"
    >
      <div className="relative z-10 grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 xl:gap-28">
        {/* Left Column: Text + Founder Card */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <AnimatedContainer variant="fadeUp">
            <h2 className="font-montserrat text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-[560] tracking-[-0.045em] leading-[0.98]">
              <span className="text-white">The Minds</span>
              <br />
              <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                Behind the Vision
              </span>
            </h2>
          </AnimatedContainer>

          <AnimatedContainer variant="fadeUp" delay={0.16} className="mt-4 sm:mt-5">
            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-white/64">
              Combining the rigour of institutional finance with the agility of
              modern entrepreneurship.
            </p>
          </AnimatedContainer>

          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto lg:mx-0">
            {founders.map((founder, i) => (
              <AnimatedContainer key={founder.name} variant="scaleUp" delay={0.3 + i * 0.1}>
                <FounderCard
                  {...founder}
                  className="shadow-[0_24px_70px_rgba(7,5,18,0.35)]"
                />
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Right Column: Portrait Image */}
        <AnimatedContainer variant="slideRight" delay={0.2} className="relative">
          <div className="absolute -top-10 right-0 h-36 w-36 rounded-full border border-dashed border-white/12 pointer-events-none hidden sm:block" />
          <div className="absolute -bottom-8 left-4 h-20 w-20 rounded-full border border-white/10 pointer-events-none hidden sm:block" />

          <div className="relative mx-auto max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:ml-auto">
            <div className="absolute inset-x-8 top-10 bottom-10 rounded-[2.5rem] bg-gradient-to-b from-primary-100/18 via-primary-400/10 to-transparent blur-2xl pointer-events-none" />
            <div className="absolute -inset-4 rounded-[2.75rem] border border-white/8 pointer-events-none" />

            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.4rem] border border-white/14 bg-white/[0.05] p-2 sm:p-3 shadow-[0_30px_90px_rgba(8,6,18,0.45)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] bg-[#ebe8f5]">
                <Image
                  src={vipinPortrait}
                  alt="Portrait of Vipin Kumar, co-founder and CEO of Inriser"
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 34vw"
                  className="object-cover object-center scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_34%),linear-gradient(180deg,rgba(15,10,36,0)_42%,rgba(15,10,36,0.68)_100%)]" />

                {/* Overlay Card */}
                <div className="absolute inset-x-3 sm:inset-x-4 md:inset-x-5 bottom-3 sm:bottom-4 md:bottom-5 rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] border border-white/12 bg-black/20 p-3 sm:p-4 md:p-5 backdrop-blur-md">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.34em] text-white/52">
                    Leadership Profile
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-end justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <p className="text-base sm:text-lg md:text-xl font-[520] text-white truncate">Vipin Kumar</p>
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/62">
                        Co-Founder &amp; CEO
                      </p>
                    </div>

                    <div className="rounded-full border border-white/14 bg-white/10 px-2.5 sm:px-3 py-1.5 sm:py-2 text-right flex-shrink-0">
                      <p className="text-base sm:text-lg leading-none font-[520] text-white">14+</p>
                      <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/52">
                        Years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </SectionContainer>
  );
}
