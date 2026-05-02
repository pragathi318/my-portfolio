"use client";

import { useState, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiArrowRight,
  FiCopy,
  FiClock,
} from "react-icons/fi";

const WEB3FORMS_ACCESS_KEY = "d810de86-a320-4949-8e4f-ca854791200d";
const EMAIL = "garipallypragathi@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from your portfolio");
    data.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot for bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Floating-label inputs */}
      <FloatingInput id="name" name="name" label="Your name" required />
      <FloatingInput id="email" name="email" type="email" label="Your email" required />
      <FloatingTextarea id="message" name="message" label="Tell me about it" required />

      <button
        type="submit"
        disabled={submitting}
        className="group relative w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-background rounded-xl font-semibold text-sm transition-all hover:bg-accent-light hover:shadow-[0_0_30px_var(--color-accent)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-background border-t-transparent animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <FiSend size={16} />
            Send message
            <FiArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
          <FiCheck size={16} />
          <span>Got it — I&apos;ll reply within 24 hours.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <FiAlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}

function FloatingInput({
  id,
  name,
  type = "text",
  label,
  required,
}: {
  id: string;
  name: string;
  type?: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="relative group">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-foreground/40 text-sm pointer-events-none transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-foreground/50"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  name,
  label,
  required,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="relative group">
      <textarea
        id={id}
        name={name}
        rows={5}
        required={required}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-3 bg-surface border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all resize-none"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-foreground/40 text-sm pointer-events-none transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-foreground/50"
      >
        {label}
      </label>
    </div>
  );
}

function LocalClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "--:--"}</span>;
}

function EmailCopy() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email"
      className="text-foreground/50 hover:text-accent transition-colors"
    >
      {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Bold headline */}
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-mono uppercase tracking-widest text-foreground/60 mb-5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Inbox open
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Let&apos;s build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                something good.
              </span>
            </h2>
            <p className="mt-5 text-foreground/60 max-w-xl mx-auto">
              Got a project, a role, or just want to chat about React, Python,
              or AI? Drop me a line — I read every message.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
          {/* LEFT: contact cards */}
          <div className="space-y-4">
            {/* Email — featured */}
            <AnimateOnScroll delay={0.1}>
              <a
                href={`mailto:${EMAIL}`}
                className="group relative block p-5 rounded-2xl bg-gradient-to-br from-surface via-surface to-accent/5 border border-border hover:border-accent/40 transition-all overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 text-accent flex-shrink-0">
                      <FiMail size={18} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                        Email me
                      </p>
                      <p className="text-sm font-semibold text-foreground truncate mt-0.5">
                        {EMAIL}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 mt-1.5">
                    <EmailCopy />
                    <FiArrowRight
                      size={14}
                      className="text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>
                </div>
              </a>
            </AnimateOnScroll>

            {/* Local time / response */}
            <AnimateOnScroll delay={0.15}>
              <div className="p-5 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent">
                    <FiClock size={14} />
                  </span>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                    Local time · Hyderabad
                  </p>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  <LocalClock /> <span className="text-foreground/40 text-sm font-mono ml-1">IST</span>
                </p>
                <p className="text-xs text-foreground/50 mt-2">
                  I usually reply within 24 hours.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Socials */}
            <AnimateOnScroll delay={0.2}>
              <div className="p-5 rounded-2xl bg-surface border border-border">
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-3">
                  Find me elsewhere
                </p>
                <div className="flex items-center gap-2">
                  <SocialPill
                    href="https://github.com/pragathi318"
                    icon={FiGithub}
                    label="GitHub"
                  />
                  <SocialPill
                    href="https://www.linkedin.com/in/pragathi-garipally-4667682b4/"
                    icon={FiLinkedin}
                    label="LinkedIn"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT: form */}
          <AnimateOnScroll delay={0.25}>
            <div className="relative p-6 sm:p-7 rounded-2xl bg-surface border border-border">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function SocialPill({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof FiGithub;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-light border border-border text-sm text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors"
    >
      <Icon size={14} />
      {label}
    </a>
  );
}
