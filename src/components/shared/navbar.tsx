"use client";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const handleRedirect = (): void => {
    window.location.href = "https://papermind-tbo2.vercel.app/";
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-tight text-white ">
          PaperMind 🧠
        </h1>

        {/* CTA */}
        <Button onClick={handleRedirect} className="rounded-full px-6">
          Start Writing
        </Button>
      </div>
    </nav>
  );
}