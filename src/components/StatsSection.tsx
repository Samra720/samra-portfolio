import { FaListCheck } from "react-icons/fa6";

export default function StatsSection() {
  return (
    <section className="text-main px-6 md:px-12 xl:px-24 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        
        <div className="border-y md:border-r p-10 xl:p-14 flex flex-col items-center xl:items-start text-center xl:text-left">
          <FaListCheck className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">2450</h1>
          <p className="text-muted text-md uppercase tracking-wider">Projects Completed Done</p>
        </div>

        <div className="border-b md:border-y xl:border-r p-10 xl:p-14 flex flex-col items-center xl:items-start text-center xl:text-left">
          <FaListCheck className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">1085</h1>
          <p className="text-muted text-md uppercase tracking-wider">Satisfied Clients</p>
        </div>

        <div className="border-b md:border-y md:border-r p-10 xl:p-14 flex flex-col items-center xl:items-start text-center xl:text-left">
          <FaListCheck className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">07</h1>
          <p className="text-muted text-md uppercase tracking-wider">My Team Members</p>
        </div>

        <div className="border-b md:border-y p-8 xl:p-12 flex flex-col items-center xl:items-start text-center xl:text-left">
          <FaListCheck className="text-5xl md:text-6xl text-main" />
          <h1 className="text-4xl md:text-5xl font-semibold my-5">2790</h1>
          <p className="text-muted text-md uppercase tracking-wider">World Wide Customers</p>
        </div>

      </div>
    </section>
  );
}
