"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared";

export function CTASection() {
  const handleRedirect = (): void => {
    window.location.href = process.env.NEXT_PUBLIC_APP_URL!;
  };

  return (
    <section className="relative w-full py-28 md:py-32 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto  text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Ready to Chat with Your Documents?
          </motion.h2>

          {/* Subtext */}
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
            Experience fast, accurate answers powered by your own data.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleRedirect}
              className="
                rounded-full px-10 text-lg
                bg-gradient-to-r from-indigo-500 to-purple-600
                text-white
                shadow-lg shadow-purple-500/20
                hover:scale-105
                transition
              "
            >
              Try PaperMind Now 🚀
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-neutral-500"
          >
            No credit card required • Get started in seconds
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
