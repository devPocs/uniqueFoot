//import React, { useContext } from "react";
//
////import DescriptionContext
//import { DescriptionContext } from "../contexts/DescriptionContext";
//
////import productContext
//import { ProductContext } from "../contexts/ProductContext";
//
//function ProductDescription() {
//  const { showItemDescription } = useContext(DescriptionContext);
//  //const { products } = useContext(ProductContext);
//
//  return (
//    <div
//      className={`${
//        showItemDescription
//          ? "fixed bg-gray-500 w-[100%] h-[100%] opacity-70"
//          : ""
//      }`}
//    >
//      <div
//        className={`${
//          showItemDescription
//            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 h-[600px] w-[800px] bg-white px-4 shadow-2xl"
//            : ""
//        }`}
//      >
//        <div></div>
//      </div>
//    </div>
//  );
//}
//
//export default ProductDescription;

//when showItemDescription is true, show the  product description
//so first import the context
//
// ProductDescription.jsx
import React, { useContext } from "react";
import { DescriptionContext } from "../contexts/DescriptionContext";

function ProductDescription() {
  const { showItemDescription } = useContext(DescriptionContext);

  return (
    <div>
      {showItemDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70">
          <div className="p-4 bg-white rounded shadow-2xl">
            Your product description content here
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescription;

//import React, { useContext } from "react";
//import { DescriptionContext } from "../contexts/DescriptionContext";
//
//function ProductDescription() {
//  const { showItemDescription } = useContext(DescriptionContext);
//
//  return (
//    <div
//      className={`${
//        showItemDescription
//          ? "fixed inset-0 bg-gray-500 w-full h-full opacity-70 overflow-hidden"
//          : "disable-scroll"
//      }`}
//    >
//      <div
//        className={`${
//          showItemDescription
//            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 h-96 w-96 bg-white px-4 shadow-2xl"
//            : "disable-scroll"
//        }`}
//      >
//        <div></div>
//      </div>
//    </div>
//  );
//}
//
//export default ProductDescription;
