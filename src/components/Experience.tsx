"use client";

import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Welerix",
    period: "Jan 2026 – Present",
    description: [
      "Building digital wedding invitation experiences on MyShaadhiLink — a wedding planning platform",
      "Developing additional client websites end-to-end across the company portfolio",
      "Implementing responsive UIs and dynamic features with React and Node.js",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    link: "https://www.myshaadhilink.in/",
  },
  {
    role: "Web Developer",
    company: "Fortune Floors",
    period: "Sep 2025 – Present",
    description: [
      "Designed and improved the UI for a real estate website",
      "Enhanced responsiveness across devices and screen sizes",
      "Optimized navigation flow for better user experience",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://fortunefloors.com/",
  },
  {
    role: "Web Developer",
    company: "Party Stories",
    period: "Sep 2025 – Present",
    description: [
      "Built responsive website sections for a banquet hall business",
      "Created clean content layouts to showcase venue details",
      "Ensured cross-browser compatibility and mobile-first design",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://www.party-stories.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Where I've applied my skills"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-6 ring-4 ring-background z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-1/2 p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-foreground/40">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-3">
                      <p className="text-accent text-sm">{exp.company}</p>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-foreground/50 hover:text-accent transition-colors"
                        >
                          <FiExternalLink size={12} />
                          <span>View site</span>
                        </a>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-foreground/60 flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 text-[8px]">&bull;</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono text-foreground/50 bg-surface-light rounded-full border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
