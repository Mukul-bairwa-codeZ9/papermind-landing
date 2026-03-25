"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container } from "@/components/shared";

export function DemoSection() {
  const handleRedirect = (): void => {
    window.location.href = process.env.NEXT_PUBLIC_APP_URL!;
  };

  return (
    <section id="demo" className="relative w-full py-28 md:py-32 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <Container>
        <div className="max-w-6xl mx-auto  text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            See PaperMind in Action
          </motion.h2>

          <p className="mt-4 text-neutral-400">
            Upload a PDF and start chatting with your data instantly.
          </p>

          {/* Product Frame*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="
              mt-14 rounded-2xl overflow-hidden
              border border-white/10
              bg-white/5 backdrop-blur
              shadow-2xl shadow-indigo-500/10
              transition-all duration-300
            "
          >
            <div className="relative">
              {/* 🔝 Fake browser bar (premium touch) */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>

              <Image
                src="/images/demo.png"
                alt="PaperMind Demo"
                width={1200}
                height={700}
                className="w-full"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Button
              size="lg"
              onClick={handleRedirect}
              className="
                rounded-full px-8
                bg-gradient-to-r from-indigo-500 to-purple-600
                text-white
                shadow-lg shadow-indigo-500/20
                hover:scale-105
                transition
              "
            >
              Try Live Demo 🚀
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
