import { useState } from "react";
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
    <section className="bg-black text-white px-24 py-24">
      <div className="flex justify-between items-center mb-15">
        <div className="w-90">
          <p className="mb-2">
            <span className="text-2xl">____</span>{" "}
            <span className="text-sm ml-1">MY SERVICES ?</span>
          </p>
          <h2 className="text-6xl font-bold mb-12">What I'm Offering</h2>
        </div>
        <p className="w-120">
          There are many variations of passages of Lorem Ipsum, but the
          majority have suffered alteration in some form.
        </p>
        <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#fe2a2f] via-[#bf178c] to-[#6100fd] text-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.7)] cursor-pointer">
          All Services
        </button>
      </div>

      <div className="flex">
        <div className="w-30 h-70 mt-5 mr-40 flex flex-col justify-between items-center">
          <p className="rotate-270 my-10">SCROLL DOWN</p>
          <div className="h-17 border w-0 mx-auto"></div>

          <button
            onClick={() => safeChange(nextPage)}
            className="w-14 h-14 rounded-full bg-white text-black text-xl flex items-center justify-center cursor-pointer"
          >
            <FaArrowDownLong />
          </button>
        </div>

        <div
          className="overflow-hidden"
          style={{ height: `${CARD_HEIGHT}px` }}
        >
          <div
            className="flex flex-col transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${page * (CARD_HEIGHT + GAP)}px)` }}
          >
            <div className="flex gap-8 mb-8">
              <ServiceCard
                icon={<CiPen className="text-6xl" />}
                title="UI/UX CREATIVE DESIGN"
                link="/uiux"
              />
              <ServiceCard
                icon={<MdOutlineMonitor className="text-6xl" />}
                title="VISUAL GRAPHIC DESIGN"
                link="/graphic"
              />
              <ServiceCard
                icon={<PiStrategy className="text-6xl" />}
                title="STRATEGY & DIGITAL MARKETING"
                link="/marketing"
              />
            </div>

            <div className="flex gap-8">
              <ServiceCard
                icon={<FaNodeJs className="text-6xl" />}
                title="WEB DEVELOPMENT"
                link="/web"
              />
              <ServiceCard
                icon={<FaReact className="text-6xl" />}
                title="FRONTEND DEVELOPMENT"
                link="/frontend"
              />
              <ServiceCard
                icon={<FaNode className="text-6xl" />}
                title="BACKEND DEVELOPMENT"
                link="/backend"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
