import React, { useContext } from "react";
import { DescriptionContext } from "../contexts/DescriptionContext";
import { ProductContext } from "../contexts/ProductContext";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

function ProductDescription() {
  const {
    showItemDescription,
    handleSetItemDescription,
    selectedProduct,
    handleSelectedProduct,
  } = useContext(DescriptionContext);

  const { products } = useContext(ProductContext);

  const item = products.find((product) => product.id === selectedProduct);

  return (
    <div>
      {showItemDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70">
          <div className="relative flex h-[400px] w-[800px] rounded bg-[#f1f1f1] p-4 shadow-2xl">
            {/*image */}
            <div className="flex h-[95%] w-[30%] flex-col items-center">
              <img
                className="h-[80%] w-full object-cover"
                src={item.src}
                alt={item.alt}
              />
              <div>
                <button className="mt-5 w-[165px] cursor-pointer bg-[#ffffff] p-2 text-center font-semibold text-[#6e6e6e]">
                  <AiOutlineShoppingCart className="inline-block pr-1 text-2xl" />
                  Add to Cart
                </button>
              </div>
            </div>
            {/*item-details*/}
            <div className="h-[75%] flex-1 font-semibold text-black">
              <div className="pb-4 pl-4 text-2xl">{item.description}</div>
              <div className="mt-2 p-4">
                Number in Stock :{" "}
                <span className="text-red-800">Out of Stock</span>
              </div>
              <div className="mt-2 p-4">
                Sizes : <span className="">42-46</span>
              </div>
              <div className="mt-2 p-4">Colors :</div>
            </div>
            {/*close-modal*/}
            <div
              onClick={() => {
                handleSetItemDescription();
                handleSelectedProduct("");
              }}
              className="h-6 w-6 cursor-pointer text-2xl hover:text-[red]"
            >
              <TiDeleteOutline />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescription;

{
  /*first, style the description, next see how you can make the whole page static while the description is displayed
next arrange the cartand cart context.
next create
*/
}
