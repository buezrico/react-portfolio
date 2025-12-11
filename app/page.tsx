import Image from "next/image";
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
    <main className="relative min-h-screen">
      {/* Edge decorative bubbles - Left and Right margins throughout page */}
      <div className="absolute inset-0 -z-40 overflow-hidden pointer-events-none">
        {/* LEFT EDGE BUBBLES (6 total) */}

        {/* Left Bubble 1 - 40px, Header area */}
        <div className="absolute top-[8%] left-[3%] w-[40px] h-[40px] rounded-full opacity-28 animate-float hidden md:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left Bubble 2 - 55px, About section */}
        <div className="absolute top-[25%] left-[6%] w-[55px] h-[55px] rounded-full opacity-32 animate-float animation-delay-1500 hidden lg:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble2.png"
              alt=""
              fill
              className="object-cover"
              sizes="55px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left Bubble 3 - 35px, Work experience */}
        <div className="absolute top-[42%] left-[2%] w-[35px] h-[35px] rounded-full opacity-25 animate-float animation-delay-3000 hidden md:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="35px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left Bubble 4 - 60px, Portfolio (largest left) */}
        <div className="absolute top-[58%] left-[5%] w-[60px] h-[60px] rounded-full opacity-35 animate-float animation-delay-4500 hidden lg:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble2.png"
              alt=""
              fill
              className="object-cover"
              sizes="60px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left Bubble 5 - 45px, Skills */}
        <div className="absolute top-[72%] left-[4%] w-[45px] h-[45px] rounded-full opacity-30 animate-float animation-delay-2000 hidden md:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="45px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Left Bubble 6 - 50px, Contact/Footer */}
        <div className="absolute top-[88%] left-[7%] w-[50px] h-[50px] rounded-full opacity-30 animate-float animation-delay-5000 hidden lg:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble2.png"
              alt=""
              fill
              className="object-cover"
              sizes="50px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* RIGHT EDGE BUBBLES (6 total) */}

        {/* Right Bubble 1 - 60px, Header (largest right) */}
        <div className="absolute top-[5%] right-[4%] w-[60px] h-[60px] rounded-full opacity-35 animate-float animation-delay-1000 hidden lg:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble2.png"
              alt=""
              fill
              className="object-cover"
              sizes="60px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Bubble 2 - 38px, About section */}
        <div className="absolute top-[20%] right-[6%] w-[38px] h-[38px] rounded-full opacity-28 animate-float animation-delay-2500 hidden md:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="38px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Bubble 3 - 55px, Work experience */}
        <div className="absolute top-[35%] right-[3%] w-[55px] h-[55px] rounded-full opacity-32 animate-float animation-delay-4000 hidden lg:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble2.png"
              alt=""
              fill
              className="object-cover"
              sizes="55px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Bubble 4 - 42px, Portfolio */}
        <div className="absolute top-[50%] right-[7%] w-[42px] h-[42px] rounded-full opacity-30 animate-float animation-delay-500 hidden md:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="42px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Bubble 5 - 58px, Skills */}
        <div className="absolute top-[68%] right-[5%] w-[58px] h-[58px] rounded-full opacity-33 animate-float animation-delay-3500 hidden lg:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble2.png"
              alt=""
              fill
              className="object-cover"
              sizes="58px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Bubble 6 - 40px, Footer */}
        <div className="absolute top-[85%] right-[6%] w-[40px] h-[40px] rounded-full opacity-28 animate-float animation-delay-1800 hidden md:block">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm">
            <Image
              src="/images/bubble1.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Page content */}
      <Header />
      <FloatingNav />
      <About />
      <WorkExperience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
