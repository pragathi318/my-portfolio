"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Subtle background grid + orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="order-2 md:order-1">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-foreground/70">Open to full-stack roles</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Pragathi.
            </span>
            <br />
            <span className="text-foreground/90">
              I build web apps that ship.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Full-stack developer & Python enthusiast — React frontends, Node
            APIs, and AI-powered experiences. Currently building at{" "}
            <span className="text-foreground/90 font-medium">Welerix</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex items-center gap-3 flex-wrap"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background text-sm font-semibold hover:bg-accent-light transition-colors"
            >
              Get in touch
              <FiArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/Pragathi_Garipally_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent hover:text-accent text-foreground/80 text-sm font-semibold transition-colors"
            >
              <FiDownload size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex items-center gap-6 text-foreground/40"
          >
            <a
              href="https://github.com/pragathi318"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pragathi-garipally-4667682b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:garipallypragathi@gmail.com"
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: circular portrait with floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 relative w-full max-w-sm sm:max-w-md mx-auto aspect-square"
        >
          {/* Big soft glow */}
          <div className="absolute inset-4 bg-gradient-to-tr from-accent/40 to-accent-light/30 rounded-full blur-3xl opacity-70" />

          {/* Decorative dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20"
          />

          {/* Portrait — gradient ring + circular photo */}
          <div className="absolute inset-6 rounded-full p-[3px] bg-gradient-to-tr from-accent via-accent-light to-accent/40 shadow-2xl shadow-accent/20">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
              <Image
                src="/natural.png"
                alt="Pragathi Garipally"
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Floating chip — top-right: tech stack */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute top-4 -right-2 sm:top-2 sm:right-0 bg-surface/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-xl border border-border"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-0.5">
              Stack
            </p>
            <p className="text-xs font-semibold text-foreground">
              React · Node · Python
            </p>
          </motion.div>

          {/* Floating chip — bottom-left: project count */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15 }}
            className="absolute bottom-6 -left-2 sm:bottom-2 sm:-left-4 bg-surface/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-xl border border-border flex items-center gap-2.5"
          >
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light tabular-nums">
              4+
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                Live
              </span>
              <span className="block text-xs font-semibold text-foreground">
                Projects
              </span>
            </span>
          </motion.div>

          {/* Floating chip — left side: location */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-10 bg-surface/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-xl border border-border items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="text-[11px] font-mono text-foreground/70">
              Hyderabad, IN
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-foreground/30 hover:text-accent transition-colors"
          aria-label="Scroll to about"
        >
          <FiArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
