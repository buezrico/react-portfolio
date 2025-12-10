import { Header } from "@/components/sections/Header";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { About } from "@/components/sections/About";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingNav />
      <About />
      <WorkExperience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
