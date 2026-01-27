import Navbar from "./Navbar";
import Particles from "./Particles";
import { FaArrowDown } from "react-icons/fa";
import { GiHand } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white px-24 pt-30 pb-20">

      <div style={{ width: '100%', height: '700px', position: 'absolute', top: '0', right: '0' }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="border border-white w-40 rotate-45 bg-white absolute top-0 left-95" />
      <div className="border border-white w-55 rotate-45 bg-white absolute top-0 left-96" />
      <div className="text-white mx-auto w-90 h-90 bg-[linear-gradient(to_top_right,#2b90a7_30%,#9dc497_40%,#fbe88c_50%,#edab84_60%,#933557_70%,#6b1d42_100%)] absolute -top-50 left-180 rotate-45 opacity-95 blur-2xl" />

      <Navbar />
      <div className="grid grid-cols-2 gap-16 items-center">
        <div className="space-y-6 mt-15">
          <div>
            <GiHand className="text-[#f8b039] text-5xl" />
            <h1 className="text-7xl font-light">Hello! <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#05e2f6]">I'm Cb97</span></h1>

            <div className="mt-7 flex justify-between max-w-[500px]">
              <div className="border w-40 my-auto" />
              <p className="text-3xl ml-3">Web Developer</p>
              <HiSparkles className="my-auto text-4xl" />
            </div>
          </div>
          <div className="text-[#c4c5cc] max-w-xl">
            <p>Hello! I'm Samra. I'm a <span className="text-white font-medium">Web Developer, design thinker, product designer,</span> experience strategist, generative artist & human-loving introvert</p>
            <ul className="my-13">
              <li><FaCheck className="inline mr-4 mb-1" /> Product must be authentic</li>
              <li><FaCheck className="inline mr-4 mb-1" /> Solve pain points elegantly</li>
              <li><FaCheck className="inline mr-4 mb-1" /> User testing, feedback and validation</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#ff2931] via-[#bf178c] to-[#6100fd] text-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.7)]">
              Let's Talk
            </button>
            <button className="py-3 ml-10 border-b-2 border-white text-gray-300 flex ">
              Download Cv <FaArrowDown className="ml-4 my-auto" />
            </button>
          </div>
        </div>

        <div>
          <img
            src="/images/Wallpaper33.png"
            alt="Portrait of the product designer"
            className="w-full h-130 object-cover rounded-2xl opacity-90"
          />
        </div>

        <div className="absolute left-170 top-105 rounded-full w-42 h-42 pt-1 pl-1 bg-linear-to-r from-red-500 via-yellow-500 to-blue-500">
          <div className=" relative rounded-full w-40 h-40 px-10 py-14 text-4xl bg-[#10111a]">
            Hello
            <div className="border bg-white w-73 absolute top-19 -left-17 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;