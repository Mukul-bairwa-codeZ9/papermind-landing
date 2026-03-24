"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function DemoSection() {
  const handleRedirect = (): void => {
    window.location.href = "https://papermind-tbo2.vercel.app/";
  };

  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold"
        >
          See PaperMind in Action
        </motion.h2>

        <p className="mt-4 text-neutral-400">
          Upload a PDF and start chatting with your data instantly.
        </p>

        {/* Screenshot Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-xl hover:shadow-2xl transition"
        >
          <Image
            src="/images/demo.png"
            alt="PaperMind Demo"
            width={1200}
            height={700}
            className="w-full"
          />
        </motion.div>

        {/* CTA */}
        <div className="mt-10">
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={handleRedirect}
          >
            Try Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
