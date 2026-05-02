"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Skillsync.AI",
    description:
      "Job-seekers can't always afford interview coaching. Built an AI-powered mock-interview platform that generates personalized technical and HR questions on the fly via the OpenAI API, gives real-time feedback, and lets candidates practice end-to-end. Designed and shipped solo — from API integration to animated UI.",
    tech: [
      "Next.js",
      "React",
      "OpenAI API",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
    image: "/skillsync.png",
    github: "https://github.com/pragathi318/Skillsync.AI",
    live: "https://mock-interview-ai-beta.vercel.app/",
    featured: true,
  },
  {
    title: "Sabroso — Global Cloud Kitchen",
    description:
      "Home chefs lack a unified platform to reach customers. Built the backend for a food-delivery platform that connects customers with home chefs across 30+ cuisines — JWT-secured auth, menu management, and an order-placement flow built with Node, Express, and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    image: "/sabroso.png",
    github: "https://github.com/pragathi318/sabroso-server",
    live: "https://sabroso1.netlify.app/",
  },
  {
    title: "Fortune Floors",
    description:
      "Real estate client site needed a smoother browsing experience on mobile. Redesigned the UI, rebuilt navigation, and reworked layouts to be fully responsive — making property listings easier to scan on any device.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/fortune-floors.png",
    live: "https://fortunefloors.com/",
  },
  {
    title: "Party Stories",
    description:
      "Banquet hall business needed an online presence to drive event bookings. Built a responsive marketing site with clean content sections, venue galleries, and an intuitive navigation flow guiding visitors toward the inquiry CTA.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/party-stories.png",
    live: "https://www.party-stories.com/",
  },
];

function LaptopFrame({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Laptop lid */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-t-xl p-2 shadow-xl">
        {/* Tiny camera dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-700" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-background">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {children}
        </div>
      </div>

      {/* Laptop base — wider trapezoid hinge */}
      <div
        className="relative h-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900"
        style={{
          width: "calc(100% + 28px)",
          marginLeft: "-14px",
          clipPath: "polygon(0 0, 100% 0, 97.5% 100%, 2.5% 100%)",
        }}
      >
        {/* Trackpad notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-zinc-950 rounded-b-md" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div className="group relative rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5 p-5">
        {/* Laptop with screenshot */}
        <div className="relative px-3 pt-3 pb-1">
          <LaptopFrame src={project.image} alt={project.title}>
            {/* Featured badge — sits on the laptop screen */}
            {project.featured && (
              <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-accent bg-background/80 backdrop-blur-md rounded-full border border-accent/30 z-10">
                Featured
              </span>
            )}
            {/* Hover description overlay — over the laptop screen */}
            <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-background via-background/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                {project.description}
              </p>
            </div>
          </LaptopFrame>
        </div>

        {/* Footer — always visible */}
        <div className="mt-5 pt-4 border-t border-border">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code`}
                  className="text-foreground/50 hover:text-accent transition-colors"
                >
                  <FiGithub size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live site`}
                  className="text-foreground/50 hover:text-accent transition-colors"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-mono text-foreground/40 bg-surface-light rounded-full border border-border">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end">
          <AnimateOnScroll>
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                My Work
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
              >
                Selected projects,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                  built end-to-end
                </span>
              </motion.h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="space-y-5">
              <p className="text-foreground/60 leading-relaxed">
                Each project below tackles a real problem — designed, built,
                and deployed. Hover any card for the full story, or click
                through to see them live.
              </p>
              <a
                href="https://github.com/pragathi318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View on GitHub
                <FiArrowRight size={16} />
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA strip — captures interest after browsing projects */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl bg-gradient-to-r from-surface via-surface to-accent/10 border border-border">
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold text-foreground">
                Like what you see?
              </p>
              <p className="text-sm text-foreground/60 mt-1">
                I&apos;m available for full-stack roles and freelance projects.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background text-sm font-semibold hover:bg-accent-light transition-colors"
              >
                Let&apos;s talk
                <FiArrowRight size={14} />
              </a>
              <a
                href="/Pragathi_Garipally_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-accent hover:text-accent text-foreground/80 text-sm font-semibold transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
