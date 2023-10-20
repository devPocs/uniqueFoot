import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

function SideBar() {
  const { isOpen, setIsOpen, handleClose } = useContext(SideBarContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:max-w[30vh] overflow fixed top-0  z-20 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 mt-6 border-b ">
        <div className="text-2xl font-bold uppercase ">Cart(0)</div>
        <div
          onClick={() => {
            handleClose();
          }}
          className="text-2xl"
        >
          <AiOutlineArrowLeft />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
