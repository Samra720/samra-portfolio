import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Particles from "./Particles";

function CaseStudySection() {
  return (
    <div className="px-25 pt-10 relative">

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

      <div className="h-40 flex flex-col justify-between items-center text-center">
        <div className="h-3 w-3 border rounded-full shadow-glow"></div>
        <h2 className="text-5xl font-bold mt-6">CASE STUDY</h2>
        <p className="w-120">
          There are many variations of passages of Lorem Ipsum, but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="mt-15">
        <div className="my-10 flex justify-between">
          <img
            src="/images/ecommerce_jewellery_page.png"
            alt="ecommerce_jewellery_page"
            className="w-160 h-90 object-contain"
          />
          <div className="px-15 py-8 w-160 h-90 flex flex-col items-start justify-around">
            <p className="font-semibold text-xl bg-main px-9 py-2 rounded-full" style={{ color: 'var(--btn-text)' }}>WEB APP</p>
            <h3 className="text-4xl font-bold mt-6">HTML, CSS & JS E-commerce Web Page.</h3>
            <NavLink to="/products" className="text-xl border-b-2 pb-2 hover:pb-1 transition-all cursor-pointer">See Details <FiArrowUpRight className="inline ml-2" /></NavLink>
          </div>
        </div>

        <div className="my-10 flex justify-between">
          <div className="px-15 py-8 w-160 h-90 flex flex-col items-start justify-around">
            <p className="font-semibold text-xl bg-main px-9 py-2 rounded-full" style={{ color: 'var(--btn-text)' }}>WEB APP</p>
            <h3 className="text-4xl font-bold mt-6">HTML, CSS & JS E-commerce Web Page.</h3>
            <NavLink to="/products" className="text-xl border-b-2 pb-2 hover:pb-1 transition-all cursor-pointer">See Details <FiArrowUpRight className="inline ml-2" /></NavLink>
          </div>
          <img
            src="/images/ecommerce_jewellery_page.png"
            alt="ecommerce_jewellery_page"
            className="w-160 h-90 object-contain"
          />
        </div>

        <div className="my-10 flex justify-between">
          <img
            src="/images/ecommerce_jewellery_page.png"
            alt="ecommerce_jewellery_page"
            className="w-160 h-90 object-contain"
          />
          <div className="px-15 py-8 w-160 h-90 flex flex-col items-start justify-around">
            <p className="font-semibold text-xl bg-main px-9 py-2 rounded-full" style={{ color: 'var(--btn-text)' }}>WEB APP</p>
            <h3 className="text-4xl font-bold mt-6">HTML, CSS & JS E-commerce Web Page.</h3>
            <NavLink to="/products" className="text-xl border-b-2 pb-2 hover:pb-1 transition-all cursor-pointer">See Details <FiArrowUpRight className="inline ml-2" /></NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CaseStudySection;
