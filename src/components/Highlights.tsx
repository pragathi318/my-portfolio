"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { FiLayout, FiServer, FiCpu, FiGithub } from "react-icons/fi";
import type { IconType } from "react-icons";

interface Pillar {
  icon: IconType;
  title: string;
  description: string;
  stack: string[];
}

const pillars: Pillar[] = [
  {
    icon: FiLayout,
    title: "Frontend",
    description:
      "Pixel-tight React UIs with smooth motion, accessible components, and responsive layouts that ship fast.",
    stack: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    icon: FiServer,
    title: "Backend",
    description:
      "REST APIs, JWT auth, and database design — everything from the schema to the deployed endpoint.",
    stack: ["Node.js", "Express", "MongoDB", "Python"],
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description:
      "Real OpenAI integrations — dynamic prompts, structured outputs, and AI features users actually use.",
    stack: ["OpenAI API", "Prompt design", "Streaming"],
  },
];

const GITHUB_USERNAME = "pragathi318";

export default function Highlights() {
  return (
    <section className="relative py-20 px-6 border-y border-border/50 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <AnimateOnScroll>
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              What I bring
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground max-w-2xl">
              End-to-end ownership across the stack.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 0.1}>
              <div className="group h-full p-5 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 text-accent mb-4">
                  <p.icon size={18} />
                </span>
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-mono text-foreground/60 bg-surface-light rounded-full border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* GitHub stats card */}
        <AnimateOnScroll delay={0.3}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-5 p-5 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-3 sm:flex-shrink-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 text-accent">
                <FiGithub size={18} />
              </span>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                  Live activity
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  github.com/{GITHUB_USERNAME}
                </p>
              </div>
            </div>
            <div className="flex-1 sm:border-l sm:border-border sm:pl-5 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=141A2B&title_color=06b6d4&icon_color=06b6d4&text_color=e2e8f0&hide_title=true&hide=contribs&card_width=420`}
                alt={`${GITHUB_USERNAME}'s GitHub stats`}
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
