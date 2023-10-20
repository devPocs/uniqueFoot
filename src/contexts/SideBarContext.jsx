import React, { createContext, useState } from "react";
//create sideBarContext.
export const SideBarContext = createContext();
const SideBarProvider = ({ children }) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
