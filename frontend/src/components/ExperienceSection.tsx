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
          <div className="h-3 w-3 border rounded-full shadow-[0_0_15px_13px_rgba(255,255,255,0.7)]"></div>
          <h2 className="text-5xl font-bold mt-6">EXPERIENCE</h2>
          <p className="w-120">
            There are many variations of passages of Lorem Ipsum, but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div className="mt-15">
          <div id="experienceCards" className="border border-[#171725] px-12 py-12 my-10 flex justify-between items-center">
            <div className="flex gap-15">
              <p id="numbers" className="h-14 w-14 text-2xl font-bold bg-[#171725] flex items-center justify-center">1</p>
              <div>
                <h3 className="text-2xl font-bold pb-1">MERN Stack Intern</h3>
                <p className="text-[#c9ccd5] text-md">Sprouto - Lahore</p>
              </div>
            </div>
            <p className="font-semiblack text-xl px-8 border-l-2">JOB DURATION - 3 MONTHS</p>
          </div>

          <div id="experienceCards" className="border border-[#171725] px-12 py-12 my-10 flex justify-between items-center">
            <div className="flex gap-15">
              <p id="numbers" className="h-14 w-14 text-2xl font-bold bg-[#171725] flex items-center justify-center">2</p>
              <div>
                <h3 className="text-2xl font-bold pb-1">Trainee Web Developer</h3>
                <p className="text-[#c9ccd5] text-md">SeeBiz PVT LTD - Lahore</p>
              </div>
            </div>
            <p className="font-semiblack text-xl px-8 border-l-2">JOB DURATION - 14 MONTHS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
