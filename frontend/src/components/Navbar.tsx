function Navbar() {
  return <div className="flex justify-between border border-white">
    <p className="border-b my-auto">It's Me</p>
    <div className="flex gap-5">
      <div className=" w-42.5">
        <h3>My Projects</h3>
        <p>See all the nice projects I've done</p>
      </div>
      <div className="w-42.5">
        <h3>About Me</h3>
        <p>Learn about my self what I do</p>
      </div>
      <div className="w-42.5">
        <h3>Contact me</h3>
        <p>alisamra720@gmail.com</p>
      </div>
    </div>
  </div>
}

export default Navbar;
