"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} Pragathi Garipally. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pragathi318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/pragathi-garipally-4667682b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="mailto:garipallypragathi@gmail.com"
            className="text-foreground/40 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
