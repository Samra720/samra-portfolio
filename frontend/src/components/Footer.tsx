import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-muted px-6 md:px-12 xl:px-24 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full py-12 border-t-2 border-main">
        
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          <NavLink to="/" className="text-lg md:text-xl pb-1 hover:border-b-2 cursor-pointer transition-all">LinkedIn</NavLink>
          <NavLink to="/" className="text-lg md:text-xl pb-1 hover:border-b-2 cursor-pointer transition-all">GitHub</NavLink>
          <NavLink to="/" className="text-lg md:text-xl pb-1 hover:border-b-2 cursor-pointer transition-all">Instagram</NavLink>
          <NavLink to="/" className="text-lg md:text-xl pb-1 hover:border-b-2 cursor-pointer transition-all">Behance</NavLink>
        </div>

        <p className="text-center text-sm md:text-base opacity-80">
          Personal portfolio © {new Date().getFullYear()} Samra
        </p>
      </div>
    </footer>
  );
}
