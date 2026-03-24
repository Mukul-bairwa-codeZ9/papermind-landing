import {Navbar} from "@/components/shared";
import {Hero} from "@/components/features/hero";
import { Highlights } from "@/components/features/highlights";
import { RagSection } from "@/components/features/rag";

export default function Home(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <RagSection />
    </main>
  );
}