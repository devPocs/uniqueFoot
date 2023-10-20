import React, { createContext } from "react";

export const ProductContext = createContext();

const products = [
  {
    id: 1,
    src: "/nike-giorgio-sneakers.jpg",
    alt: "nike-giorgio",
    description: "Nike Georgio Sneakers",
    price: "NGN 42,999",
  },
  {
    id: 2,
    src: "/green-palto.jpg",
    alt: "green-palto",
    description: "Green Palto",
    price: "NGN 53,999",
  },
  {
    id: 3,
    src: "/irene-green-palto.jpg",
    alt: "irene-green-palto",
    description: "Irene-Green-Palto",
    price: "NGN 34,999",
  },
  {
    id: 4,
    src: "/noah-smith-boots.jpg",
    alt: "noah-smith-boots",
    description: "Noah Smith Chelsea Boots",
    price: "NGN 35,999",
  },
  {
    id: 5,
    src: "/suede-parker.jpg",
    alt: "suede-parker",
    description: "Men's Suede Parker",
    price: "NGN 56,999",
  },
  {
    id: 6,
    src: "/jaysen-sneakers.jpg",
    alt: "jaysen-sneakers",
    description: "Jaysen Sneakers",
    price: "NGN 39,999",
  },
  {
    id: 7,
    src: "/noah-smith.jpg",
    alt: "noah-smith",
    description: "Noah Smith Brogues",
    price: "NGN 42,999",
  },
  {
    id: 8,
    src: "/sebastien-multi-sneakers.jpg",
    alt: "sebastien-multi-sneakers",
    description: "Sebastien Multi Sneakers-Unisex",
    price: "NGN 45,999",
  },
];

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
