import { FaRocket, FaBugSlash } from "react-icons/fa6";
import { GoGitCommit } from "react-icons/go";
import { IoShieldCheckmark } from "react-icons/io5";

export default function StatsSection() {
  return (
    <section className="text-main px-6 md:px-12 xl:px-24 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        
        <div className="border-y md:border-r p-10 xl:p-14 flex flex-col items-center xl:items-start text-center xl:text-left">
          <GoGitCommit className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">70+</h1>
          <p className="text-muted text-md uppercase tracking-wider">GitHub Commits This Year</p>
        </div>

        <div className="border-b md:border-y xl:border-r p-10 xl:p-14 flex flex-col items-center xl:items-start text-center xl:text-left">
          <IoShieldCheckmark className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">100%</h1>
          <p className="text-muted text-md uppercase tracking-wider">QA Pass Rate on Production</p>
        </div>

        <div className="border-b md:border-y md:border-r p-10 xl:p-14 flex flex-col items-center xl:items-start text-center xl:text-left">
          <FaRocket className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">05+</h1>
          <p className="text-muted text-md uppercase tracking-wider">Live Production Features</p>
        </div>

        <div className="border-b md:border-y p-8 xl:p-12 flex flex-col items-center xl:items-start text-center xl:text-left">
          <FaBugSlash className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">0</h1>
          <p className="text-muted text-md uppercase tracking-wider">Critical Bugs in Production</p>
        </div>

      </div>
    </section>
  );
}
