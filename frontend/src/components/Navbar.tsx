import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 w-full z-50 bg-transparent text-white px-24 pt-10">
      <h3 className="text-lg font-semibold tracking-wide border-b-2">It's Me</h3>

      <ul className="flex gap-10 text-gray-300">
        <li className="hover:text-white transition cursor-pointer border-t-2">
          <div className=" w-42.5">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-2 pt-1">My Projects</h3>
              <MdArrowOutward className="my-auto" />
            </div>
            <p>See all the nice projects I've done</p>
          </div>
        </li>
        <li className="hover:text-white transition cursor-pointer border-t-2">
          <div className="w-42.5">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-2 pt-1">About Me</h3>
              <MdArrowOutward className="my-auto" />
            </div>
            <p>Learn about my self what I do</p>
          </div>
        </li>
        <li className="hover:text-white transition cursor-pointer border-t-2">
          <div className="w-42.5">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-2 pt-1">Contact me</h3>
              <MdArrowOutward className="my-auto" />
            </div>
            <p>alisamra720@gmail.com</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
