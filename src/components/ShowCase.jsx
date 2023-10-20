import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import ViewDetailsEye from "./tiny components/ViewDetailsEye";

//import productContext
import { ProductContext } from "../contexts/ProductContext";
//import descriptionContext
import { DescriptionContext } from "../contexts/DescriptionContext";

function ShowCase() {
  const { products } = useContext(ProductContext);
  const { handleSetItemDescription } = useContext(DescriptionContext);

  return (
    <div className="w-[80%] m-auto h-[1500px] my-16">
      <div className="m-auto w-[40%] text-center text-[2.4rem] text-[#212121] font-bold">
        <h2>Our Products</h2>
      </div>
      <p className="w-[50%] m-auto text-[1.2rem] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
      </p>

      <div className="grid grid-cols-4 m-auto my-10 gap-x-10 gap-y-8">
        {products.map((product) => {
          return (
            <div
              className="relative bg-[#f1f1f1] aspect-w-3 aspect-h-4 flex flex-col justify-center items-center group transition"
              key={product.id}
            >
              <img
                className="object-cover object-center mt-6 w-[75%] transition-transform transform group-hover:scale-75 group-hover:rotate-6 h-3/4 duration-500"
                src={product.src}
                alt={product.alt}
              />
              <div className="p-2 text-center">
                <button>
                  <div className="absolute flex items-center justify-center w-8 h-8 bg-[#ffffff] rounded-full top-1 right-3">
                    <Link to={"/"}>
                      <AiOutlineHeart className="text-xl" />
                    </Link>
                  </div>
                </button>
                <div
                  onClick={() => {
                    handleSetItemDescription();
                  }}
                >
                  <ViewDetailsEye />
                </div>
                <div className="absolute left-14 bottom-8 group">
                  <button className="relative z-10 text-[#6e6e6e] font-semibold text-center bg-[#ffffff] w-[165px] opacity-0 group-hover:opacity-90 p-2 cursor-pointer">
                    <AiOutlineShoppingCart className="inline-block pr-1 text-2xl" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="-mt-3 text-center duration-300 ease-in-out group-hover:opacity-0 ">
                <p className="text-[#6e6e6e] text-[1.1rem] font-semibold">
                  {product.description}
                </p>
                <p className="mb-10 font-semibold text-red-700 ">
                  {product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowCase;
