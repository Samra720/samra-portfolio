import { FaListCheck } from "react-icons/fa6";

export default function StatsSection() {
  return (
    <section className="text-main px-24 mb-10">
      <div className="grid grid-cols-4">
        <div className="border-y border-r p-14">
          <FaListCheck className="text-6xl" />
          <h1 className="text-5xl font-semibold my-5">2450</h1>
          <p className="text-muted text-md">Projects Completed Done</p>
        </div>
        <div className="border-y border-r p-14">
          <FaListCheck className="text-6xl" />
          <h1 className="text-5xl font-semibold my-5">1085</h1>
          <p className="text-muted text-md">Satisfied Clients</p>
        </div>
        <div className="border-y border-r p-14">
          <FaListCheck className="text-6xl" />
          <h1 className="text-5xl font-semibold my-5">07</h1>
          <p className="text-muted text-md">My Team Members</p>
        </div>
        <div className="border-y p-14">
          <FaListCheck className="text-6xl" />
          <h1 className="text-5xl font-semibold my-5">2790</h1>
          <p className="text-muted text-md">World Wide Customers</p>
        </div>
      </div>
    </section>
  );
}
