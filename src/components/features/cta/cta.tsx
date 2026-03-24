
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const handleRedirect = (): void => {
    window.location.href = "https://papermind-tbo2.vercel.app/";
  };

  return (
    <section className="py-28 bg-gradient-to-b from-neutral-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Ready to Chat with Your Documents?
        </motion.h2>

        {/* Subtext */}
        <p className="mt-4 text-neutral-400">
          Experience fast, accurate answers powered by your own data.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8"
        >
          <Button
            size="lg"
            className="rounded-full px-10 text-lg"
            onClick={handleRedirect}
          >
            Try PaperMind Now 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  );
}