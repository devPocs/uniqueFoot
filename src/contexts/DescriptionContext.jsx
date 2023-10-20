import React, { createContext, useState } from "react";

export const DescriptionContext = createContext();

const DescriptionProvider = ({ children }) => {
  const [showItemDescription, setShowItemDescription] = useState(false);

  function handleSetItemDescription() {
    setShowItemDescription(!showItemDescription);
  }
  return (
    <DescriptionContext.Provider
      value={{ showItemDescription, handleSetItemDescription }}
    >
      {children}
    </DescriptionContext.Provider>
  );
};

export default DescriptionProvider;
