import {Footer, Navbar} from "@/components/shared";
import {Hero} from "@/components/features/hero";
import { Highlights } from "@/components/features/highlights";
import { RagSection } from "@/components/features/rag";
import { DemoSection } from "@/components/features/demo";
import { CTASection } from "@/components/features/cta";

export default function Home(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <RagSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  );
}