"use client";

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
    description: "Research papers, contracts, or reports — PaperMind handles it all.",
  },
  {
    icon: MessageSquare,
    title: "Ask in Plain English",
    description: "No complex queries. Just ask questions like a normal conversation.",
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

export  function Highlights(){
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold"
        >
          What You Can Do
        </motion.h2>

        {/* Subtext */}
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Extract insights from your documents instantly using AI powered by RAG.
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-neutral-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}