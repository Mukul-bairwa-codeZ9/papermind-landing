"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleRedirect = () => {
    window.location.href = "https://papermind-tbo2.vercel.app/";
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black to-neutral-900 text-white">
      <div className="max-w-3xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Chat with your documents using AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-neutral-400"
        >
          Upload PDFs and get accurate, context-aware answers powered by RAG.
          No hallucinations — just real insights from your data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={handleRedirect}
          >
            Start Writing
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}