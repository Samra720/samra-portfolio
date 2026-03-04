import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="text-muted px-24 mt-20">
      <div className=" flex justify-between w-full py-12 border-t-2 border-main">
        <div className="flex gap-5">
          <NavLink to="/" className="text-xl pb-1 hover:border-b-2 cursor-pointer">LinkedIn</NavLink>
          <NavLink to="/" className="text-xl pb-1 hover:border-b-2 cursor-pointer">GitHub</NavLink>
          <NavLink to="/" className="text-xl pb-1 hover:border-b-2 cursor-pointer">Instagram</NavLink>
          <NavLink to="/" className="text-xl pb-1 hover:border-b-2 cursor-pointer">Behance</NavLink>
        </div>
        <p className="text-center">Personal portfolio © {new Date().getFullYear()} Samra</p>
      </div>
    </footer>
  );
}
