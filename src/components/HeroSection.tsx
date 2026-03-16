import Navbar from "./Navbar";
import GradientCarouselBar from "./Carousel";
import Particles from "./Particles";
import { FaArrowDown } from "react-icons/fa";
import { GiHand } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiDevToLogo } from "react-icons/pi";
import ThemeButton from "./ThemeButton";
import { scrollToId } from "../utils/scroll";


function HeroSection() {
  return (
    <section className="relative overflow-x-hidden">

      <div className="inset-0 -z-10 pointer-events-none">
        <div style={{ width: '100%', height: '700px', position: 'absolute', top: '0', right: '0' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      </div>

      <div className="hidden lg:block border border-main w-40 rotate-45 bg-main absolute top-0 left-95" />
      <div className="hidden lg:block border border-main w-55 rotate-45 bg-main absolute top-0 left-96" />
      <div className="text-main mx-auto w-90 h-90 bg-[linear-gradient(to_top_right,#2b90a7_30%,#9dc497_40%,#fbe88c_50%,#edab84_60%,#933557_70%,#6b1d42_100%)] absolute -top-50 left-80 md:left-180 rotate-45 opacity-95 blur-2xl" />

      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen text-white px-6 md:px-24 pb-20 pt-10 md:pt-0">

        <div className="space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div>
            <GiHand className="text-[#f8b039] text-4xl md:text-5xl" />
            <h1 className="text-5xl md:text-7xl font-light text-main">
              Hello! <br className="md:hidden" />
              <span className="font-extrabold bg-clip-text text-transparent bg-linear-to-r from-(--name-color-start) to-(--name-color-end)">
                I'm Cb97
              </span>
            </h1>

            <div className="mt-7 text-main flex items-center justify-between max-w-125">
              <div className="border w-16 md:w-40 my-auto" />
              <p className="text-xl md:text-3xl ml-3">Web Developer</p>
              <HiSparkles className="my-auto text-2xl md:text-4xl" />
            </div>
          </div>

          <div className="text-muted max-w-xl">
            <p>Hello! I'm Samra. I'm a <span className="text-white font-medium">Web Developer, design thinker, product designer,</span> experience strategist, generative artist & human-loving introvert</p>
            <ul className="my-8 md:mt-13 space-y-2">
              <li><FaCheck className="inline mr-4 mb-1" /> Product must be authentic</li>
              <li><FaCheck className="inline mr-4 mb-1" /> Solve pain points elegantly</li>
              <li><FaCheck className="inline mr-4 mb-1" /> User testing, feedback and validation</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-4">
            <ThemeButton
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToId(e, "contact")}
            >
              Let's Talk
            </ThemeButton>
            <a href="/Samra_CV.pdf" download className="group no-underline">
              <button className="w-fit py-3 sm:ml-10 border-b-2 border-main text-muted flex hover:text-main transition-all cursor-pointer">
                Download Cv
                <FaArrowDown className="ml-4 my-auto transition-transform group-hover:translate-y-1" />
              </button>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <img
            src="/images/Capture1.PNG"
            alt="Portrait"
            className="w-full h-80 md:h-130 object-contain rounded-2xl opacity-90"
          />

          <div className="hidden lg:block absolute left-1/2 lg:left-[-10%] top-full lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 rounded-full w-42 h-42 pt-1 pl-1 bg-linear-to-r from-[#6580a8] via-[#9633b8] to-[#20c8c3]">
            <div className="relative rounded-full w-40 h-40 px-10 py-14 text-4xl bg-[#10111a]">
              Hello
              <div className="border bg-white w-73 absolute top-19 -left-17 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <GradientCarouselBar />

      <div className="mt-20 md:mt-35 px-6 md:px-24 flex flex-col lg:flex-row items-center w-full justify-between gap-8 pb-10">
        <div className="hidden lg:block border border-main bg-main w-40"></div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-18">
          <a href="https://www.linkedin.com/in/syeda-samra-ali-590878283/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main"><FaLinkedinIn className="inline mr-2 text-xl" /> LinkedIn</a>
          <a href="https://github.com/Samra720" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main"><FaGithub className="inline mr-2 text-xl" /> GitHub</a>
          <a href="https://dev.to/samra_ali_c61e5f484408aff" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main"><PiDevToLogo className="inline mr-2 text-2xl" /> Dev.to</a>
        </div>
        <div className="hidden lg:block border border-main bg-main w-60"></div>
        <a href="mailto:alisamra720@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main whitespace-nowrap"><FaEnvelope className="inline mr-3 text-xl" /> alisamra720@gmail.com</a>
      </div>
    </section>
  );
}


export default HeroSection;