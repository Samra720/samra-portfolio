import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Particles from "./Particles";

function CaseStudySection() {
  return (
    <div className="px-6 md:px-12 xl:px-25 pt-10 relative overflow-hidden">
      <div className="inset-0 -z-10 pointer-events-none">
        <div style={{ width: '100%', height: '1400px', position: 'absolute', top: '0', right: '0' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      </div>

      <div className="h-auto md:h-40 flex flex-col justify-between items-center text-center mb-10">
        <div className="h-3 w-3 border rounded-full shadow-glow"></div>
        <h2 className="text-3xl md:text-5xl font-bold mt-6">CASE STUDY</h2>
        <p className="max-w-xl mt-4 opacity-80">
          There are many variations of passages of Lorem Ipsum, but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="mt-10 md:mt-15 space-y-16 md:space-y-24">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-10">
          <img
            src="/images/ecommerce_jewellery_page.png"
            alt="ecommerce_jewellery_page"
            className="w-full xl:w-160 h-auto lg:h-90 object-contain rounded-lg"
          />
          <div className="px-2 xl:px-15 py-6 xl:py-8 w-full xl:w-160 flex flex-col items-center xl:items-start text-center xl:text-left">
            <p className="font-semibold text-base md:text-xl bg-main px-6 md:px-9 py-2 rounded-full" style={{ color: 'var(--btn-text)' }}>
              WEB APP
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6">
              HTML, CSS & JS E-commerce Web Page.
            </h3>
            <NavLink to="/products" className="mt-6 text-lg md:text-xl border-b-2 pb-2 hover:pb-1 transition-all">
              See Details <FiArrowUpRight className="inline ml-2" />
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-10">
          <div className="order-2 xl:order-1 px-2 xl:px-15 py-6 xl:py-8 w-full xl:w-160 flex flex-col items-center xl:items-start text-center xl:text-left">
            <p className="font-semibold text-base md:text-xl bg-main px-6 md:px-9 py-2 rounded-full" style={{ color: 'var(--btn-text)' }}>
              WEB APP
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6">
              HTML, CSS & JS E-commerce Web Page.
            </h3>
            <NavLink to="/products" className="mt-6 text-lg md:text-xl border-b-2 pb-2 hover:pb-1 transition-all">
              See Details <FiArrowUpRight className="inline ml-2" />
            </NavLink>
          </div>
          <img
            src="/images/ecommerce_jewellery_page.png"
            alt="ecommerce_jewellery_page"
            className="order-1 xl:order-2 w-full xl:w-160 h-auto lg:h-90 object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-10">
          <img
            src="/images/ecommerce_jewellery_page.png"
            alt="ecommerce_jewellery_page"
            className="w-full xl:w-160 h-auto lg:h-90 object-contain rounded-lg"
          />
          <div className="px-2 xl:px-15 py-6 xl:py-8 w-full xl:w-160 flex flex-col items-center xl:items-start text-center xl:text-left">
            <p className="font-semibold text-base md:text-xl bg-main px-6 md:px-9 py-2 rounded-full" style={{ color: 'var(--btn-text)' }}>
              WEB APP
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 md:mt-6">
              HTML, CSS & JS E-commerce Web Page.
            </h3>
            <NavLink to="/products" className="mt-6 text-lg md:text-xl border-b-2 pb-2 hover:pb-1 transition-all">
              See Details <FiArrowUpRight className="inline ml-2" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudySection;
