"use client";

import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  FiAward,
  FiBookOpen,
  FiTrendingUp,
  FiMapPin,
  FiCalendar,
  FiCheck,
} from "react-icons/fi";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  result: string;
  resultLabel: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

const featured: EducationItem = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Fortune School of Business, Hyderabad",
  period: "2023 – 2026 · Graduated",
  result: "89.55",
  resultLabel: "CGPA %",
};

const pastEducation: EducationItem[] = [
  {
    degree: "Intermediate · BiPC",
    institution: "Sri Chaitanya Junior College, Hyderabad",
    period: "2022",
    result: "92",
    resultLabel: "%",
  },
  {
    degree: "SSC · 10th Class",
    institution: "SR Digi School, Siddipet",
    period: "2020",
    result: "10/10",
    resultLabel: "GPA",
  },
];

const certifications: Certification[] = [
  { title: "Java Programming Fundamentals", issuer: "NPTEL", year: "2023" },
  { title: "Python for Everybody", issuer: "Coursera", year: "2024" },
  { title: "Web Development Bootcamp", issuer: "Udemy", year: "2024" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Where I've studied and what I've earned along the way"
        />

        {/* Featured: currently studying */}
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-surface via-surface to-accent/5 p-6 sm:p-8 mb-10">
            <div className="absolute -top-20 -right-16 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 items-center">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-mono uppercase tracking-widest text-accent">
                  <FiCheck size={11} />
                  Recently graduated · 2026
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                  {featured.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/70">
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin size={14} className="text-accent" />
                    {featured.institution}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground/50">
                    <FiCalendar size={14} />
                    {featured.period}
                  </span>
                </div>
              </div>

              {/* CGPA badge */}
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 sm:text-right">
                <div className="text-4xl sm:text-5xl font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-light">
                  {featured.result}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                  <FiTrendingUp size={12} className="text-accent" />
                  {featured.resultLabel}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Two-column: past education + certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Past education */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <FiBookOpen className="text-accent" size={18} />
                <h3 className="text-sm font-mono uppercase tracking-widest text-foreground/70">
                  Past Education
                </h3>
              </div>
              <div className="space-y-3">
                {pastEducation.map((edu) => (
                  <div
                    key={edu.degree}
                    className="group relative p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-foreground/60 mt-1 truncate">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0">
                        <span className="text-base font-bold text-accent tabular-nums">
                          {edu.result}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-foreground/40">
                          {edu.resultLabel}
                        </span>
                      </div>
                    </div>
                    <span className="block mt-2 text-[10px] font-mono text-foreground/40">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Certifications */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <FiAward className="text-accent" size={18} />
                <h3 className="text-sm font-mono uppercase tracking-widest text-foreground/70">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="group relative flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <FiAward size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {cert.title}
                      </p>
                      <p className="text-xs text-foreground/50 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-foreground/40 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
