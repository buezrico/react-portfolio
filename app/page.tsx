import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { About } from "@/components/sections/About";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Organic blob bubbles - Distributed throughout page edges */}
      <div className="absolute inset-0 -z-40 overflow-hidden pointer-events-none">
        {/* HEADER SECTION BUBBLES (0-14%) - 6 bubbles */}
        <div className="absolute top-[2%] left-[4%] w-[45px] h-[45px] opacity-30 animate-float" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="45px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[7%] right-[3%] w-[52px] h-[48px] opacity-32 animate-float animation-delay-800 hidden md:block" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="52px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[5%] left-[8%] w-[38px] h-[42px] opacity-28 animate-float animation-delay-1200 hidden lg:block" style={{borderRadius: '70% 30% 50% 50% / 40% 50% 50% 60%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="40px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[11%] right-[7%] w-[40px] h-[44px] opacity-30 animate-float animation-delay-400" style={{borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="42px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[9%] left-[2%] w-[35px] h-[38px] opacity-25 animate-float animation-delay-1600 hidden md:block" style={{borderRadius: '50% 50% 40% 60% / 50% 60% 40% 50%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="36px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[13%] right-[5%] w-[48px] h-[45px] opacity-33 animate-float animation-delay-2000 hidden lg:block" style={{borderRadius: '65% 35% 45% 55% / 55% 45% 55% 45%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="48px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* ABOUT SECTION BUBBLES (14-28%) - 6 bubbles */}
        <div className="absolute top-[16%] left-[5%] w-[42px] h-[46px] opacity-29 animate-float animation-delay-600" style={{borderRadius: '55% 45% 60% 40% / 50% 50% 50% 50%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="44px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[20%] right-[4%] w-[50px] h-[47px] opacity-31 animate-float animation-delay-1400 hidden md:block" style={{borderRadius: '35% 65% 55% 45% / 60% 50% 50% 40%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="50px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[18%] left-[1%] w-[36px] h-[40px] opacity-27 animate-float animation-delay-2200 hidden lg:block" style={{borderRadius: '45% 55% 50% 50% / 45% 60% 40% 55%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="38px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[24%] right-[8%] w-[44px] h-[48px] opacity-30 animate-float animation-delay-300" style={{borderRadius: '58% 42% 48% 52% / 52% 48% 52% 48%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="46px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[22%] left-[7%] w-[39px] h-[41px] opacity-28 animate-float animation-delay-1800 hidden md:block" style={{borderRadius: '62% 38% 42% 58% / 48% 52% 48% 52%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="40px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[27%] right-[2%] w-[46px] h-[44px] opacity-32 animate-float animation-delay-2400 hidden lg:block" style={{borderRadius: '42% 58% 52% 48% / 58% 42% 58% 42%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="46px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* WORK EXPERIENCE SECTION BUBBLES (28-42%) - 6 bubbles */}
        <div className="absolute top-[30%] left-[3%] w-[43px] h-[47px] opacity-29 animate-float animation-delay-700" style={{borderRadius: '52% 48% 58% 42% / 55% 48% 52% 45%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="45px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[34%] right-[6%] w-[49px] h-[46px] opacity-31 animate-float animation-delay-1500 hidden md:block" style={{borderRadius: '38% 62% 56% 44% / 62% 48% 52% 38%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="48px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[32%] left-[9%] w-[37px] h-[39px] opacity-26 animate-float animation-delay-2300 hidden lg:block" style={{borderRadius: '48% 52% 45% 55% / 52% 55% 45% 48%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="38px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[38%] right-[1%] w-[45px] h-[49px] opacity-30 animate-float animation-delay-400" style={{borderRadius: '56% 44% 50% 50% / 48% 52% 48% 52%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="47px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[36%] left-[6%] w-[40px] h-[42px] opacity-28 animate-float animation-delay-1900 hidden md:block" style={{borderRadius: '64% 36% 44% 56% / 46% 54% 46% 54%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="41px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[41%] right-[8%] w-[47px] h-[43px] opacity-32 animate-float animation-delay-2500 hidden lg:block" style={{borderRadius: '44% 56% 54% 46% / 56% 44% 56% 44%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="46px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* PORTFOLIO SECTION BUBBLES (42-56%) - 6 bubbles */}
        <div className="absolute top-[44%] left-[4%] w-[44px] h-[48px] opacity-30 animate-float animation-delay-800" style={{borderRadius: '50% 50% 60% 40% / 54% 46% 54% 46%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="46px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[48%] right-[5%] w-[51px] h-[47px] opacity-32 animate-float animation-delay-1600 hidden md:block" style={{borderRadius: '36% 64% 58% 42% / 64% 46% 54% 36%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="50px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[46%] left-[1%] w-[38px] h-[40px] opacity-27 animate-float animation-delay-2400 hidden lg:block" style={{borderRadius: '46% 54% 47% 53% / 50% 57% 43% 50%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="39px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[52%] right-[2%] w-[46px] h-[50px] opacity-31 animate-float animation-delay-500" style={{borderRadius: '54% 46% 52% 48% / 46% 54% 46% 54%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="48px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[50%] left-[8%] w-[41px] h-[43px] opacity-29 animate-float animation-delay-2000 hidden md:block" style={{borderRadius: '66% 34% 46% 54% / 44% 56% 44% 56%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="42px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[55%] right-[7%] w-[48px] h-[44px] opacity-33 animate-float animation-delay-2600 hidden lg:block" style={{borderRadius: '42% 58% 56% 44% / 58% 42% 58% 42%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="47px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* SKILLS SECTION BUBBLES (56-70%) - 6 bubbles */}
        <div className="absolute top-[58%] left-[5%] w-[45px] h-[49px] opacity-30 animate-float animation-delay-900" style={{borderRadius: '48% 52% 62% 38% / 56% 44% 56% 44%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="47px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[62%] right-[4%] w-[52px] h-[48px] opacity-32 animate-float animation-delay-1700 hidden md:block" style={{borderRadius: '34% 66% 60% 40% / 66% 44% 56% 34%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="52px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[60%] left-[2%] w-[39px] h-[41px] opacity-28 animate-float animation-delay-2500 hidden lg:block" style={{borderRadius: '44% 56% 49% 51% / 48% 59% 41% 52%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="40px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[66%] right-[1%] w-[47px] h-[51px] opacity-31 animate-float animation-delay-600" style={{borderRadius: '52% 48% 54% 46% / 44% 56% 44% 56%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="49px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[64%] left-[7%] w-[42px] h-[44px] opacity-29 animate-float animation-delay-2100 hidden md:block" style={{borderRadius: '68% 32% 48% 52% / 42% 58% 42% 58%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="43px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[69%] right-[8%] w-[49px] h-[45px] opacity-33 animate-float animation-delay-2700 hidden lg:block" style={{borderRadius: '40% 60% 58% 42% / 60% 40% 60% 40%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="48px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* CONTACT SECTION BUBBLES (70-85%) - 6 bubbles */}
        <div className="absolute top-[72%] left-[4%] w-[46px] h-[50px] opacity-30 animate-float animation-delay-1000" style={{borderRadius: '46% 54% 64% 36% / 58% 42% 58% 42%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="48px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[76%] right-[5%] w-[53px] h-[49px] opacity-32 animate-float animation-delay-1800 hidden md:block" style={{borderRadius: '32% 68% 62% 38% / 68% 42% 58% 32%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="52px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[74%] left-[1%] w-[40px] h-[42px] opacity-28 animate-float animation-delay-2600 hidden lg:block" style={{borderRadius: '42% 58% 51% 49% / 46% 61% 39% 54%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="41px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[80%] right-[2%] w-[48px] h-[52px] opacity-31 animate-float animation-delay-700" style={{borderRadius: '50% 50% 56% 44% / 42% 58% 42% 58%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="50px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[78%] left-[8%] w-[43px] h-[45px] opacity-29 animate-float animation-delay-2200 hidden md:block" style={{borderRadius: '70% 30% 50% 50% / 40% 60% 40% 60%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="44px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[83%] right-[7%] w-[50px] h-[46px] opacity-33 animate-float animation-delay-2800 hidden lg:block" style={{borderRadius: '38% 62% 60% 40% / 62% 38% 62% 38%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="49px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* FOOTER SECTION BUBBLES (85-100%) - 6 bubbles */}
        <div className="absolute top-[87%] left-[5%] w-[47px] h-[51px] opacity-30 animate-float animation-delay-1100" style={{borderRadius: '44% 56% 66% 34% / 60% 40% 60% 40%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="49px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[91%] right-[4%] w-[54px] h-[50px] opacity-32 animate-float animation-delay-1900 hidden md:block" style={{borderRadius: '30% 70% 64% 36% / 70% 40% 60% 30%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="53px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[89%] left-[2%] w-[41px] h-[43px] opacity-28 animate-float animation-delay-2700 hidden lg:block" style={{borderRadius: '40% 60% 53% 47% / 44% 63% 37% 56%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="42px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[95%] right-[1%] w-[49px] h-[53px] opacity-31 animate-float animation-delay-800" style={{borderRadius: '48% 52% 58% 42% / 40% 60% 40% 60%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="51px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[93%] left-[7%] w-[44px] h-[46px] opacity-29 animate-float animation-delay-2300 hidden md:block" style={{borderRadius: '72% 28% 52% 48% / 38% 62% 38% 62%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="45px" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          </div>
        </div>
        <div className="absolute top-[98%] right-[6%] w-[51px] h-[47px] opacity-33 animate-float animation-delay-2900 hidden lg:block" style={{borderRadius: '36% 64% 62% 38% / 64% 36% 64% 36%'}}>
          <div className="relative w-full h-full overflow-hidden border-2 border-white/20 shadow-lg shadow-primary/10 backdrop-blur-sm" style={{borderRadius: 'inherit'}}>
            <Image src="/images/bubble2.png" alt="" fill className="object-cover" sizes="50px" />
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
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
