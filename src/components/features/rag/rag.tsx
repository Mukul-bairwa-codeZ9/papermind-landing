"use client";

import { motion } from "framer-motion";
import {
  FileUp,
  Scissors,
  Database,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: FileUp,
    title: "Upload PDF",
    description: "Add your document to start the process",
  },
  {
    icon: Scissors,
    title: "Chunking",
    description: "Split text into meaningful overlapping chunks",
  },
  {
    icon: Database,
    title: "Embeddings",
    description: "Convert text into vector representations",
  },
  {
    icon: Search,
    title: "Vector Search",
    description: "Retrieve the most relevant chunks",
  },
  {
    icon: Sparkles,
    title: "AI Answer",
    description: "Generate accurate responses using LLM",
  },
];

export function RagSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          How PaperMind Works
        </motion.h2>

        <p className="mt-4 text-neutral-400 text-center max-w-2xl mx-auto">
          A step-by-step journey from document to intelligent answers.
        </p>

        {/* Zig-Zag Flow */}
        <div className="mt-20 space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                
                {/* Card */}
                <div
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  className={`relative max-w-md w-full p-6 rounded-2xl border backdrop-blur transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 shrink-0" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>

                  <p
                    className={`mt-3 text-sm text-neutral-400 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <motion.div
                    className="hidden md:block text-3xl text-neutral-600 mx-6"
                    animate={{
                      y: isActive ? 6 : 0,
                    }}
                  >
                    ↓
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}