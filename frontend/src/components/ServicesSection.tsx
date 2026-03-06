import { useState, useEffect } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";
import { CiPen } from "react-icons/ci";
import { FaNodeJs, FaReact, FaNode } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const CARD_HEIGHT = 320;
const GAP = 32;

function ServicesSection() {
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1400);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPage = () => {
    setPage((p) => (p + 1) % 2);
  };

  const safeChange = (fn: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    fn();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="text-main px-6 desktop-xlg:px-24 py-16 md:py-24 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10 lg:mb-15 text-center lg:text-left">
        <div className="w-full lg:w-90">
          <p className="mb-2">
            <span className="text-2xl hidden lg:inline">____</span>{" "}
            <span className="text-sm ml-1 uppercase tracking-widest">MY SERVICES ?</span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 lg:mb-12">What I'm Offering</h2>
        </div>
        <p className="w-full lg:w-120 opacity-80 mb-8 lg:mb-0">
          There are many variations of passages of Lorem Ipsum, but the
          majority have suffered alteration in some form.
        </p>
        <button
          className="w-fit mx-auto lg:mx-0 px-8 py-3 rounded-full text-white text-lg cursor-pointer transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(to right, var(--btn-grad-from), var(--btn-grad-via), var(--btn-grad-to))`,
            boxShadow: `0 0 15px 3px var(--btn-shadow)`
          }}
        >
          All Services
        </button>
      </div>

      <div className="flex justify-around">
        <div className="hidden min-[1400px]:flex w-30 h-70 mt-5 mr-40 flex-col justify-between items-center shrink-0">
          <p className="rotate-270 my-10 whitespace-nowrap">SCROLL DOWN</p>
          <div className="h-17 border w-0 mx-auto"></div>

          <button
            onClick={() => safeChange(nextPage)}
            className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: 'var(--btn-bg)', color: 'var(--btn-text)' }}
          >
            <FaArrowDownLong />
          </button>
        </div>

        <div
          className="w-full overflow-x-auto lg:overflow-hidden snap-x snap-mandatory scrollbar-hide"
          style={{ height: isMobile ? 'auto' : `${CARD_HEIGHT}px` }}
        >
          <div
            className="flex flex-row lg:flex-col transition-transform duration-500 ease-out gap-8"
            style={{ transform: isMobile ? 'none' : `translateY(-${page * (CARD_HEIGHT + GAP)}px)` }}
          >
            <div className="flex flex-row justify-around gap-8 shrink-0">
              <div className="w-[85vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
                <ServiceCard icon={<CiPen className="text-6xl" />} title="UI/UX CREATIVE DESIGN" />
              </div>
              <div className="w-[85vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
                <ServiceCard icon={<MdOutlineMonitor className="text-6xl" />} title="VISUAL GRAPHIC DESIGN" />
              </div>
              <div className="w-[85vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
                <ServiceCard icon={<PiStrategy className="text-6xl" />} title="STRATEGY & DIGITAL MARKETING" />
              </div>
            </div>

            <div className="flex flex-row justify-around gap-8 shrink-0">
              <div className="w-[85vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
                <ServiceCard icon={<FaNodeJs className="text-6xl" />} title="WEB DEVELOPMENT" />
              </div>
              <div className="w-[85vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
                <ServiceCard icon={<FaReact className="text-6xl" />} title="FRONTEND DEVELOPMENT" />
              </div>
              <div className="w-[85vw] md:w-[45vw] lg:w-auto shrink-0 snap-center">
                <ServiceCard icon={<FaNode className="text-6xl" />} title="BACKEND DEVELOPMENT" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="lg:hidden text-center text-sm opacity-50 mt-6 italic">
        Swipe horizontally to view all services
      </p>
    </section>
  );
}

export default ServicesSection;

