"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared";

export function Hero() {
  const handleRedirect = () => {
    window.location.href = process.env.NEXT_PUBLIC_APP_URL!;
  };

  const handleScroll = () => {
    const section = document.getElementById("features");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black text-white">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* 🚀 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Chat with your documents —{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              get accurate answers
            </span>{" "}
            instantly
          </motion.h1>

          {/* ✨ Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Upload PDFs and ask questions in plain English. Get fast, accurate
            answers grounded in your data — not guesses.
          </motion.p>

          {/* 🎯 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleRedirect}
              className="rounded-full px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition"
            >
              Start Writing 🚀
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleScroll}
              className="rounded-full px-8 border-white/20 text-gray-800 hover:bg-white/10 hover:scale-105 transition"
            >
              Learn More
            </Button>
          </motion.div>

          {/* 🧠 Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-neutral-500"
          >
            Built for developers, students, and researchers
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
