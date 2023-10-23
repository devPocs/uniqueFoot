import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { GrFormViewHide } from "react-icons/gr";

//import productContext
import { ProductContext } from "../contexts/ProductContext";
//import descriptionContext
import { DescriptionContext } from "../contexts/DescriptionContext";

function ShowCase() {
  const { products } = useContext(ProductContext);
  const { handleSetItemDescription, handleSelectedProduct, selectedProduct } =
    useContext(DescriptionContext);

  return (
    <div className="m-auto my-16 h-[1500px] w-[80%]">
      <div className="m-auto w-[40%] text-center text-[2.4rem] font-bold text-[#212121]">
        <h2>Our Products</h2>
      </div>
      <p className="m-auto w-[50%] text-center text-[1.2rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.
      </p>

      <div className="m-auto my-10 grid grid-cols-4 gap-x-10 gap-y-8">
        {products.map((product) => {
          return (
            <div
              className="group relative flex flex-col items-center justify-center bg-[#f1f1f1] transition"
              key={product.id}
            >
              <img
                className="mt-6 h-[75%] w-[75%] transform object-cover object-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-75"
                src={product.src}
                alt={product.alt}
              />
              <div className="p-2 text-center">
                <button>
                  <div className="absolute right-3 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]">
                    <Link to={"/"}>
                      <AiOutlineHeart className="text-xl" />
                    </Link>
                  </div>
                </button>
                <div
                  onClick={() => {
                    handleSetItemDescription();
                    handleSelectedProduct(product.id);
                  }}
                >
                  <div className="absolute right-3 top-16 flex h-8 w-8 translate-y-4 transform items-center justify-center rounded-full bg-[#ffffff] opacity-0 transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-90">
                    <button>
                      <GrFormViewHide className="text-2xl text-[#6e6e6e]" />
                    </button>
                  </div>
                </div>
                <div className="group absolute bottom-8 left-14">
                  <button className="relative z-10 w-[165px] cursor-pointer bg-[#ffffff] p-2 text-center font-semibold text-[#6e6e6e] opacity-0 group-hover:opacity-90">
                    <AiOutlineShoppingCart className="inline-block pr-1 text-2xl" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="-mt-3 text-center duration-300 ease-in-out group-hover:opacity-0 ">
                <p className="text-[1.1rem] font-semibold text-[#6e6e6e]">
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
