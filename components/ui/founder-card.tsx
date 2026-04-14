import { Badge } from "./badge";
import { cn } from "@/lib/utils";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface FounderCardProps {
  name: string;
  title: string;
  quote: string;
  linkedinUrl?: string;
  expertise: string[];
  className?: string;
}

export function FounderCard({
  name,
  title,
  quote,
  linkedinUrl,
  expertise,
  className,
}: FounderCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-white/[0.04] p-6 md:p-7",
        "backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        className
      )}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-[1.65rem] font-[520] tracking-[-0.03em] text-white">
            {name}
          </h3>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/72 transition-colors hover:text-white"
              aria-label={`${name}'s LinkedIn`}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.32em] text-white/58">
          {title}
        </p>
      </div>

      <blockquote className="mt-6 text-sm italic leading-7 text-white/78">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="mt-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
          Core expertise
        </p>
        <div className="mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1">
          {expertise.map((skill) => (
            <Badge
              key={skill}
              variant="founders"
              className="shrink-0 border-white/12 bg-white/[0.06] px-3 text-[10px] font-medium tracking-[0.22em] text-white/78"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
