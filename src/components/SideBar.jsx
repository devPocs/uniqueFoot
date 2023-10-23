import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { AiOutlineArrowRight } from "react-icons/ai";

function SideBar() {
  const { isOpen, setIsOpen, handleClose } = useContext(SideBarContext);

  return (
    <div
      className={`${
        isOpen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70 transition-all duration-700 ease-in-out"
          : ""
      }`}
    >
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } xl:max-w[30vh] overflow fixed top-0  z-20  h-full w-full bg-white px-4 shadow-2xl transition-all duration-500 md:w-[35vw] lg:px-[35px]`}
      >
        <div className="mt-6 flex items-center justify-between border-b py-6 ">
          <div className="text-2xl font-bold uppercase ">Cart(0)</div>
          <div
            onClick={() => {
              handleClose();
            }}
            className="text-2xl"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
