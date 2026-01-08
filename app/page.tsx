import { Header } from "@/components/sections/Header";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { About } from "@/components/sections/About";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { SkipLink } from "@/components/shared/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <main id="main-content" className="relative min-h-screen">
      {/* Page content */}
      <Header />
      <FloatingNav />
      <About />
      <WorkExperience />
      <Portfolio />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      </main>
    </>
  );
}
