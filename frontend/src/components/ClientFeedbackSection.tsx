import { LuCross } from "react-icons/lu";
import { SiComma } from "react-icons/si";
import { LuWaves } from "react-icons/lu";

export default function ClientFeedbackSection() {
  return (
    <div className="px-24 py-10">
      <div className="flex justify-end gap-135 items-center">
        <h2 className="border-b-2 text-xl font-semibold inline pb-1">CLIENT FEEDBACK</h2>
        <LuCross className="text-main inline text-5xl rotate-45" />
      </div>

      <div className="pl-8">
        <div>
          <SiComma className="text-5xl inline rotate-180 -mr-2" />
          <SiComma className="text-5xl inline rotate-180" />
        </div>
        <h1 className="text-7xl font-bold pl-8 pr-10 tracking-wide"><span className="pl-20">I just wanted to share a quick</span> <span>note and let you know that you</span> guys do a really good job.</h1>
      </div>

      <div className="my-10 pr-20 flex justify-between">
        <div className="px-15 py-8 w-160 h-90 flex flex-col items-start justify-around">

          <div className="relative inline-block">
            <h2 className="text-main text-2xl font-semibold">
              Syeda Samra Ali
            </h2>
            <p className="text-muted text-xl pb-6 pt-2">MERN Stack Intern, Sprouto</p>
            <svg
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              className="absolute left-0 -bottom-2 w-full h-4"
            >
              <path
                d="M0 5 Q10 0 20 6 T40 5 T60 5 T80 5 T100 5 T120 5 T140 5 T160 5 T180 5 T200 5"
                fill="none"
                stroke="var(--text-color)"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="ml-17">
            <LuWaves className="text-4xl inline text-main" />
            <LuWaves className="text-4xl inline text-main -mx-2" />
            <LuWaves className="text-4xl inline text-main" />
          </div>
        </div>
        <img
          src="/images/ecommerce_jewellery_page.png"
          alt="ecommerce_jewellery_page"
          className="w-160 h-90 object-contain"
        />
      </div>
    </div>
  )
}
