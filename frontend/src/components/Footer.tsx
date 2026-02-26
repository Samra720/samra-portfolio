
export default function Footer() {
  return (
    <footer className="bg-black text-[#9d9ea6] px-24 mt-20">
      <div className=" flex justify-between w-full py-12 border-t-2 border-white">
        <div className="flex gap-5">
          <p className="hover:text-white cursor-pointer">LinkedIn</p>
          <p className="hover:text-white cursor-pointer">Dribble</p>
          <p className="hover:text-white cursor-pointer">Instagram</p>
          <p className="hover:text-white cursor-pointer">Behance</p>
        </div>
        <p className="text-center">Personal portfolio © {new Date().getFullYear()} Samra</p>
      </div>
    </footer>
  );
}
