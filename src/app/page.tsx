import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { ScrollControls } from "@/components/ui/scroll-controls";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Work />
      <Skills />
      <Contact />
      <ScrollControls />
    </>
  );
}
