import { HiSparkles } from "react-icons/hi";

function GradientCarouselBar() {
  const items = [
    'UI/UX DESIGN',
    'APP DESIGN',
    'WEB FLOW',
    'BRANDING',
    'DEVELOPMENT',
    'PRODUCT DESIGN',
  ];

  const sequence = items.flatMap((item) => [
    item,
    'icon',
  ]);

  return (
    <section className="relative overflow-hidden w-[101%] -ml-2 -rotate-6">
      <div className="bg-linear-to-r from-[#6202ff] via-[#a814a3] to-[#f12742]">
        <div className="flex px-24 py-4 animate-marquee gap-30">
          {[...sequence, ...sequence].map((el, index) =>
            el === 'icon' ? (
              <HiSparkles
                key={index}
                className="text-2xl shrink-0 font-bold"
              />
            ) : (
              <span
                key={index}
                className="text-lg font-bold tracking-widest shrink-0"
              >
                {el}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default GradientCarouselBar;
