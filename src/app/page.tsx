import {Navbar} from "@/components/shared";
import {Hero} from "@/components/features/hero";
import { Highlights } from "@/components/features/highlights";

export default function Home(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}