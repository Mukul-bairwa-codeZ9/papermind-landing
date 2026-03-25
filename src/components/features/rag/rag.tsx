"use client";

import { Container } from "@/components/shared";
import { motion } from "framer-motion";
import { FileUp, Scissors, Database, Search, Sparkles } from "lucide-react";
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
    <section className="relative w-full py-28  md:py-32 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full" />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto ">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-center tracking-tight"
          >
            How PaperMind Works
          </motion.h2>

          <p className="mt-4 text-neutral-400 text-center max-w-2xl mx-auto  text-lg">
            A step-by-step journey from document to intelligent answers.
          </p>

          <div className="relative mt-24">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />

            <div className="space-y-20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;
                const isActive = active === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/*  Dot */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/30" />

                    <div
                      onMouseEnter={() => setActive(index)}
                      onMouseLeave={() => setActive(null)}
                      className={`
                        group relative max-w-md w-full p-6 rounded-2xl
                        border backdrop-blur transition-all duration-300
                        ${
                          isActive
                            ? "bg-white/10 border-white/30 shadow-xl shadow-indigo-500/20 scale-105"
                            : "bg-white/5 border-white/10"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition">
                          <Icon className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>

                      <p
                        className={`mt-3 text-sm text-neutral-400 leading-relaxed transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
