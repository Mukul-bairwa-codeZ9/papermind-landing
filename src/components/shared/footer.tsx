"use client";

import { Github, Linkedin } from "lucide-react";

export  function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} PaperMind. Built by Mukul Bairwa.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          
          <a
            href="https://github.com/Mukul-bairwa-codeZ9"
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/mukul-kumar-dev98"
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-white transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}