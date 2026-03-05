import Particles from "./Particles";

function ExperienceSection() {
  return (
    <div className="px-6 md:px-25 py-10 relative overflow-hidden">
      <div className="inset-0 -z-10 pointer-events-none">
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: '0', right: '0' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-between items-center text-center mb-10">
          <div className="h-3 w-3 border rounded-full shadow-glow"></div>
          <h2 className="text-4xl md:text-5xl font-bold mt-6">EXPERIENCE</h2>
          <p className="max-w-xl mt-4 opacity-80">
            There are many variations of passages of Lorem Ipsum, but the
            majority have suffered alteration in some form.
          </p>
        </div>

        <div className="mt-10 md:mt-15">
          <div
            className="group border border-[#171725] px-8 md:px-12 py-10 md:py-12 my-6 md:my-10 
              flex flex-col md:flex-row justify-between items-center text-center md:text-left
              transition-all duration-300 cursor-pointer 
              hover:bg-(--card-hover-bg) hover:text-(--card-hover-text)"
            style={{ color: 'var(--text-color)' }}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-15 items-center md:items-center">
              <div
                className="w-14 h-14 text-2xl font-bold flex items-center justify-center transition-all duration-300
                  bg-(--num-bg) text-(--num-text) 
                  group-hover:bg-(--num-text) group-hover:text-(--num-bg)"
              >
                1
              </div>

              <div>
                <h3 className="text-2xl font-bold pb-1 group-hover:text-white!">MERN Stack Intern</h3>
                <p className="text-md opacity-80 group-hover:text-white!">Sprouto - Lahore</p>
              </div>
            </div>

            <p className="mt-8 md:mt-0 font-semiblack text-xl md:px-8 md:border-l-2 border-main group-hover:text-white! group-hover:border-white transition-colors">
              JOB DURATION - 3 MONTHS
            </p>
          </div>

          <div
            className="group border border-[#171725] px-8 md:px-12 py-10 md:py-12 my-6 md:my-10 
              flex flex-col md:flex-row justify-between items-center text-center md:text-left
              transition-all duration-300 cursor-pointer hover:bg-(--card-hover-bg) hover:text-(--card-hover-text)"
            style={{ color: 'var(--card-text)' }}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-15 items-center md:items-center">
              <div
                className="w-14 h-14 text-2xl font-bold flex items-center justify-center transition-all duration-300
                  bg-(--num-bg) text-(--num-text) group-hover:bg-(--num-text) group-hover:text-(--num-bg)"
              >
                2
              </div>

              <div>
                <h3 className="text-2xl font-bold pb-1 group-hover:text-white!">Trainee Web Developer</h3>
                <p className="text-md opacity-80 group-hover:text-white!">SeeBiz PVT LTD - Lahore</p>
              </div>
            </div>

            <p className="mt-8 md:mt-0 font-semiblack text-xl md:px-8 md:border-l-2 border-main group-hover:text-white!">
              JOB DURATION - 14 MONTHS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
