import Navbar from "./Navbar";
import Particles from "./Particles";
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white px-24 pt-40 pb-20">

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
      <div className="text-white mx-auto w-90 h-90 bg-[linear-gradient(to_top_right,#2b90a7_30%,#9dc497_40%,#fbe88c_50%,#edab84_60%,#933557_70%,#6b1d42_100%)] absolute -top-50 left-180 rotate-45 opacity-90 blur-2xl" />

      <Navbar />
      <div className="relative grid grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-sm tracking-widest uppercase text-gray-400">Hello</p>
          <h1 className="text-5xl font-bold leading-tight">
            I'm <span className="text-indigo-400">Madhu</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Product Designer crafting meaningful digital experiences with focus on usability and aesthetics.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 font-medium">
              Get in touch
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-300">
              View work
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/Wallpaper33.png"
            alt="Portrait of the product designer"
            className="w-full h-130 object-cover rounded-2xl opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;