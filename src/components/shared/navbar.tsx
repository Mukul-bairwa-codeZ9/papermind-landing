"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared";
import { motion } from "framer-motion";

export function Navbar() {
  const handleRedirect = (): void => {
    window.location.href = process.env.NEXT_PUBLIC_APP_URL!;
  };

  const navLinks = [
    { id: "features", text: "Features" },
    { id: "demo", text: "Demo" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl md:py-4">
      <Container>
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl font-semibold tracking-tight text-white cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              PaperMind
            </span>{" "}
          </motion.h1>
          {/*  Nav Links  */}
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {navLinks.map((el) => (
              <button
                key={el.id}
                onClick={() =>
                  document
                    .getElementById(el.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-white transition font-bold text-slate-200   cursor-pointer hover:underline"
              >
                {el.text}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Button
            onClick={handleRedirect}
            className="
            rounded-full px-6
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white
              shadow-md shadow-indigo-500/20
              hover:scale-105
              transition"
          >
            Start Writing
          </Button>
        </div>
      </Container>
    </nav>
  );
}
