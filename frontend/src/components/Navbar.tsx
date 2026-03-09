import { useState } from 'react';
import { MdArrowOutward, MdMenu, MdClose } from 'react-icons/md';
import { scrollToId } from "../utils/scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative flex items-center justify-between w-full z-50 text-main px-6 md:px-24 pt-10 ${isOpen ? 'bg-black' : 'bg-transparent'}`}>
      <h3 className="text-lg font-semibold tracking-wide border-b-2 mb-10">It's Me</h3>

      <div className="lg:hidden mb-10">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      <ul className={`
        ${isOpen ? 'flex' : 'hidden'} ${isOpen && 'bg-black py-5 px-10'}
        flex-col absolute top-24 left-0 w-full px-6 gap-6 pb-10
        lg:flex lg:flex-row lg:static lg:w-auto lg:px-0 lg:gap-10 lg:pb-0
        text-muted
      `}>

        <li className="hover:text-main transition cursor-pointer border-t-2">
          <a href="#my-projects" className="hover:text-main transition-all" onClick={(e) => scrollToId(e, "contact")}>
            <div className="w-full md:w-42.5">
              <div className="flex justify-between">
                <h3 className="font-bold text-xl mb-2 pt-1">My Projects</h3>
                <MdArrowOutward className="my-auto" />
              </div>
              <p>See all the nice projects I've done</p>
            </div>
          </a>
        </li>

        <li className="hover:text-main transition cursor-pointer border-t-2">
          <a href="#about-me" className="hover:text-main transition-all" onClick={(e) => scrollToId(e, "contact")}>
            <div className="w-full md:w-42.5">
              <div className="flex justify-between">
                <h3 className="font-bold text-xl mb-2 pt-1">About Me</h3>
                <MdArrowOutward className="my-auto" />
              </div>
              <p>Learn about my self what I do</p>
            </div>
          </a>
        </li>

        <li className="hover:text-main transition cursor-pointer border-t-2">
          <a href="#contact" className="hover:text-main transition-all" onClick={(e) => scrollToId(e, "contact")}>
            <div className="w-full md:w-42.5">
              <div className="flex justify-between">
                <h3 className="font-bold text-xl mb-2 pt-1">Contact me</h3>
                <MdArrowOutward className="my-auto" />
              </div>
              <p>alisamra720@gmail.com</p>
            </div>
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
