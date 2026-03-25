"use client";

import { Container } from "@/components/shared";
import { motion } from "framer-motion";
import { FileText, MessageSquare, Brain, Zap } from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: FileText,
    title: "Upload Any PDF",
    description:
      "Research papers, contracts, or reports — PaperMind handles it all.",
  },
  {
    icon: MessageSquare,
    title: "Ask in Plain English",
    description:
      "No complex queries. Just ask questions like a normal conversation.",
  },
  {
    icon: Brain,
    title: "Context-Aware AI",
    description: "Answers are grounded in your document — no hallucinations.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Powered by Groq + LLaMA 3 for ultra-fast responses.",
  },
];

export function Highlights() {
  return (
    <section
      id="features"
      className="relative w-full py-24 md:py-32 bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <Container>
        <div className="text-center">
          {/* 🚀 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            What You Can Do
          </motion.h2>

          {/* ✨ Subtext */}
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Extract insights from your documents instantly using AI powered by
            RAG.
          </p>

          {/* 🧱 Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="
                    group p-6 rounded-2xl
                    border border-white/10
                    bg-white/5 backdrop-blur
                    hover:bg-white/10
                    hover:shadow-lg hover:shadow-indigo-500/10
                    transition-all duration-300
                  "
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
