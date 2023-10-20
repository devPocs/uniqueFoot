import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { GrFormViewHide } from "react-icons/gr";

function ViewDetailsEye() {
  return (
    <button>
      <div className="absolute top-16 flex right-3 items-center justify-center w-8 h-8 bg-[#ffffff] rounded-full opacity-0 transition-transform duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-90">
        <GrFormViewHide className="text-2xl text-[#6e6e6e]" />
      </div>
    </button>
  );
}

export default ViewDetailsEye;
