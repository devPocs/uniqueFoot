import React, { createContext, useState } from "react";

export const DescriptionContext = createContext();

const DescriptionProvider = ({ children }) => {
  const [showItemDescription, setShowItemDescription] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  function handleSetItemDescription() {
    setShowItemDescription(!showItemDescription);
  }
  const handleSelectedProduct = (id) => {
    setSelectedProduct(id);
  };
  return (
    <DescriptionContext.Provider
      value={{
        showItemDescription,
        handleSetItemDescription,
        selectedProduct,
        handleSelectedProduct,
      }}
    >
      {children}
    </DescriptionContext.Provider>
  );
};

export default DescriptionProvider;
