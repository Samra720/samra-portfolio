import Particles from "./Particles";

function ExperienceSection() {
  return (
    <div className="px-25 py-10 relative">
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
        <div className="h-40 flex flex-col justify-between items-center text-center">
          <div className="h-3 w-3 border rounded-full shadow-glow"></div>
          <h2 className="text-5xl font-bold mt-6">EXPERIENCE</h2>
          <p className="w-120">
            There are many variations of passages of Lorem Ipsum, but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div className="mt-15">

          <div
            className="group border border-[#171725] px-12 py-12 my-10 flex justify-between items-center transition-all duration-300 cursor-pointer 
             hover:bg-(--card-hover-bg) hover:text-(--card-hover-text)"
            /* Changed 'color' to 'var(--text-color)' to ensure it starts black/white correctly */
            style={{ color: 'var(--text-color)' }}
          >
            <div className="flex gap-15">
              <div
                className="w-14 h-14 text-2xl font-bold flex items-center justify-center transition-all duration-300
                 bg-(--num-bg) text-(--num-text) 
                 group-hover:bg-(--num-text) group-hover:text-(--num-bg)"
              >
                1
              </div>

              <div>
                {/* Added 'text-inherit' so it follows the parent's hover:text color */}
                <h3 className="text-2xl font-bold pb-1 group-hover:text-white!">MERN Stack Intern</h3>
                <p className="text-md opacity-80 group-hover:text-white!">Sprouto - Lahore</p>
              </div>
            </div>

            {/* Added 'text-inherit' and 'group-hover:border-white' for that vertical line */}
            <p className="font-semiblack text-xl px-8 border-l-2 border-main group-hover:text-white! group-hover:border-white transition-colors">
              JOB DURATION - 3 MONTHS
            </p>
          </div>


          <div
            className="group border border-[#171725] px-12 py-12 my-10 flex justify-between items-center transition-all duration-300 cursor-pointer hover:bg-(--card-hover-bg) hover:text-(--card-hover-text)"
            style={{ color: 'var(--card-text)' }}
          >
            <div className="flex gap-15">
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

            <p className="font-semiblack text-xl px-8 border-l-2 border-main group-hover:text-white!">
              JOB DURATION - 14 MONTHS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
