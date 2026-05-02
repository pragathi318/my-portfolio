"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import { FiMapPin, FiBookOpen, FiBriefcase, FiSend } from "react-icons/fi";

const quickFacts = [
  {
    icon: FiBriefcase,
    label: "Currently",
    value: "Welerix · Full-Stack Dev",
  },
  {
    icon: FiBookOpen,
    label: "Education",
    value: "BCA · Graduated 2026",
  },
  {
    icon: FiMapPin,
    label: "Based in",
    value: "Hyderabad, India",
  },
  {
    icon: FiSend,
    label: "Status",
    value: "Open to roles",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to who I am and what I do"
        />

        <div className="grid md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: portrait + quick facts */}
          <AnimateOnScroll className="md:col-span-5">
            <div className="flex flex-col items-center md:items-start">
              {/* Circular portrait with gradient ring */}
              <div className="relative w-56 sm:w-64 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-accent-light/30 rounded-full blur-2xl opacity-70" />
                <div className="relative w-full h-full p-[3px] rounded-full bg-gradient-to-tr from-accent via-accent-light to-accent/40">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
                    <Image
                      src="/natural.png"
                      alt="Pragathi Garipally"
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 224px, 256px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Name plate */}
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground">
                  Pragathi Garipally
                </h3>
                <p className="text-sm text-foreground/50 mt-0.5">
                  Full-Stack Developer
                </p>
              </div>

              {/* Quick facts */}
              <ul className="mt-6 w-full space-y-2.5">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-surface border border-border"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Icon size={15} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-foreground">
                        {value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Right: bio + tech */}
          <AnimateOnScroll delay={0.15} className="md:col-span-7">
            <div className="space-y-6">
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  I&apos;m a recent BCA graduate (2026) and full-stack
                  developer focused on turning ideas into polished, performant
                  web apps — comfortable across the stack from React frontends
                  to Node APIs.
                </p>
                <p>
                  Recent work includes{" "}
                  <span className="text-foreground font-medium">
                    Skillsync.AI
                  </span>
                  , an AI-powered mock interview platform built with Next.js
                  and the OpenAI API, and{" "}
                  <span className="text-foreground font-medium">Sabroso</span>,
                  a full-stack food delivery platform with a Node, Express, and
                  MongoDB backend. I&apos;ve also contributed to live client
                  sites like Fortune Floors and Party Stories.
                </p>
                <p>
                  Currently building at{" "}
                  <span className="text-foreground font-medium">Welerix</span>{" "}
                  on MyShaadhiLink and other client websites — actively seeking
                  an entry-level software developer role where I can keep
                  building, learning, and shipping.
                </p>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-3">
                  Stack I reach for
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Tailwind CSS",
                    "Python",
                    "OpenAI API",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
