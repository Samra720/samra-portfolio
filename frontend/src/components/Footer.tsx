import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black text-[#9d9ea6] px-24 mt-20">
      <div className=" flex justify-between w-full py-12 border-t-2 border-white">
        <div className="flex gap-5">
          <NavLink to="/" className="text-xl border-b-2 pb-2 hover:pb-1 transition-all cursor-pointer">LinkedIn</NavLink>
          <a href="" className="hover:text-white cursor-pointer">LinkedIn</a>
          <a href="" className="hover:text-white cursor-pointer">GitHub</a>
          <a href="" className="hover:text-white cursor-pointer">Instagram</a>
          <a href="" className="hover:text-white cursor-pointer">Behance</a>
        </div>
        <p className="text-center">Personal portfolio © {new Date().getFullYear()} Samra</p>
      </div>
    </footer>
  );
}
