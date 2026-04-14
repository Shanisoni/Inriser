

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import firstFeatureImage from "@/app/first.png";
import secondFeatureImage from "@/app/second.png";
import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/layout/section-container";
import {
  AnimatedContainer,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-container";

const newGenFeatures = [
  "Real-time Multi-asset Tracking",
  "Compliance & Governance First",
  "AI-Powered Market Intel",
];

const tradingViewFeatures = [
  "Analyse with multiple timeframes",
  "Best indicators to give insights",
  "Industry's best available to you",
];

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
      <span className="text-xs sm:text-sm text-text-secondary">{text}</span>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <SectionContainer
      id="about"
      bg="default"
      padding="lg"
      className="flat-section-bg relative overflow-hidden"
    >
      <div className="relative z-10 space-y-20 sm:space-y-28 md:space-y-32 lg:space-y-40">
        {/* Feature Block 1: New Generation */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <AnimatedContainer variant="slideLeft" className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <Badge variant="default">New Generation</Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-tight text-text-primary">
              Because spreadsheets
              <br />
              aren&apos;t the future
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mx-auto lg:mx-0">
              Inriser tracks your wealth with forensic precision and provides
              market information that actually makes sense. No noise, just signals.
            </p>

            <StaggerContainer className="space-y-3 sm:space-y-4 pt-2 inline-flex flex-col items-start mx-auto lg:mx-0" staggerDelay={0.12} delayStart={0.3}>
              {newGenFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <CheckItem text={feature} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedContainer>

          {/* Right Image */}
          <AnimatedContainer variant="slideRight" delay={0.15} className="order-1 lg:order-2">
            <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none">
              <Image
                src={firstFeatureImage}
                alt="Forensic Precision Dashboard"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 58vw"
                className="h-auto w-full object-contain opacity-90"
              />
            </div>
          </AnimatedContainer>
        </div>

        {/* Feature Block 2: TradingView */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-44 items-center">
          {/* Left Image */}
          <AnimatedContainer variant="slideLeft" delay={0.15} className="order-1">
            <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none lg:-ml-10">
              <Image
                src={secondFeatureImage}
                alt="TradingView Charts interface"
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 50vw"
                className="h-auto w-full object-contain opacity-90"
              />
            </div>
          </AnimatedContainer>

          {/* Right Text */}
          <AnimatedContainer variant="slideRight" className="relative order-2 lg:justify-self-end lg:-translate-x-6 text-center lg:text-left">
            <div className="relative max-w-md mx-auto lg:mx-0 space-y-4 sm:space-y-5 md:space-y-6">
              <Badge variant="default">Realtime Market Pulse</Badge>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-tight text-text-primary">
                Charts Powered by
                <br />
                TradingView
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mx-auto lg:mx-0">
                Track changes with the best views and analysis through TradingView
                charts.
              </p>

              <StaggerContainer className="space-y-3 sm:space-y-4 pt-2 inline-flex flex-col items-start mx-auto lg:mx-0" staggerDelay={0.12} delayStart={0.3}>
                {tradingViewFeatures.map((feature) => (
                  <StaggerItem key={feature}>
                    <CheckItem text={feature} />
                  </StaggerItem>
                ))}
              </StaggerContainer>

            </div>
          </AnimatedContainer>
        </div>
      </div>
    </SectionContainer>
  );
}
