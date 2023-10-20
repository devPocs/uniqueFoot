function Nav() {
  return (
    <div>
      <nav className="flex items-center justify-center bg-[#2f333a] text-white h-[4.5rem]">
        <ul className="flex items-center justify-center gap-[8rem]">
          <li className="relative group">
            <span className="p-3 cursor-pointer">Home</span>
            <ul
              className="rounded top-[35px] absolute w-[200px] hidden text-gray-800 bg-white border border-gray-300 mt-2 
              space-y-1 group-hover:block group-hover:z-10 shadow-md p-3"
            >
              <li>
                <a href="#">Submenu 1</a>
              </li>
              <li>
                <a href="#">Submenu 2</a>
              </li>
              <li>
                <a href="#">Submenu 3</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="p-3 cursor-pointer">About</span>
            <ul
              className="rounded top-[35px] absolute w-[200px] hidden text-gray-800 bg-white border border-gray-300 mt-2 
              space-y-1 group-hover:block group-hover:z-10 shadow-md p-3"
            >
              <li>
                <a href="#">Submenu A</a>
              </li>
              <li>
                <a href="#">Submenu B</a>
              </li>
              <li>
                <a href="#">Submenu C</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="p-3 cursor-pointer">Office Shoes</span>
            <ul
              className="rounded top-[35px] absolute w-[200px] hidden text-gray-800 bg-white border border-gray-300 mt-2 
              space-y-1 group-hover:block group-hover:z-10 shadow-md p-3"
            >
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="p-3 cursor-pointer">Sneakers</span>
            <ul
              className="rounded top-[35px] absolute w-[200px] hidden text-gray-800 bg-white border border-gray-300 mt-2 
              space-y-1 group-hover:block group-hover:z-10 shadow-md p-3"
            >
              <li className="cursor-pointer hover:bg-gray-200">
                <a href="#">Choice A</a>
              </li>
              <li>
                <a href="#">Choice B</a>
              </li>
            </ul>
          </li>

          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
