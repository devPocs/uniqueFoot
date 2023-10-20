import React, { useContext } from "react";
//import icons
import { BsBag, BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SideBarContext } from "../contexts/SideBarContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  return (
    <div>
      <header className="m-auto flex items-center justify-between w-[80%]">
        <img src="/uniqueFoot.jpg" alt="pics" className="w-[7.5rem]" />
        <ul className="flex gap-[4vh]">
          <li>
            <div className="hover:cursor-pointer">
              <CiSearch className="text-2xl hover:text-[#fe9227]" />
            </div>
          </li>
          <li>
            <div className="hover:cursor-pointer">
              <BsPerson className="text-2xl hover:text-[#fe9227]" />
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="hover:cursor-pointer"
            >
              <BsBag className="text-2xl hover:text-[#fe9227]" />
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
