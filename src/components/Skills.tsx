"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import type { IconType } from "react-icons";

type Level = "Expert" | "Advanced" | "Intermediate";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: Level;
}

const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", level: "Expert" },
  { name: "CSS", icon: SiCss, color: "#1572B6", level: "Expert" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Advanced" },
  { name: "React", icon: SiReact, color: "#61DAFB", level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Advanced" },
  { name: "Framer Motion", icon: SiFramer, color: "#BB4BF6", level: "Advanced" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Advanced" },
  { name: "Express", icon: SiExpress, color: "#ffffff", level: "Intermediate" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Intermediate" },
  { name: "Python", icon: SiPython, color: "#3776AB", level: "Advanced" },
  { name: "SQL", icon: TbSql, color: "#4479A1", level: "Intermediate" },
  { name: "Git", icon: SiGit, color: "#F05032", level: "Expert" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", level: "Advanced" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <AnimateOnScroll delay={index * 0.04}>
      <div className="group flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-surface-light border border-border flex items-center justify-center flex-shrink-0">
          <skill.icon
            size={22}
            style={{ color: skill.color }}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground truncate">
            {skill.name}
          </h3>
        </div>

        {/* Level chip */}
        <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20 flex-shrink-0">
          {skill.level}
        </span>
      </div>
    </AnimateOnScroll>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric heading */}
        <div className="mb-16">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              My Toolkit
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl"
            >
              Design, Develop, Deliver:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                my essential gear
              </span>
            </motion.h2>
          </AnimateOnScroll>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
